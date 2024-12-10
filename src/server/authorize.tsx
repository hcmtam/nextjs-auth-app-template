"use server";
import axios from "axios";
import bcrypt from "bcryptjs";
import { prismaClient } from "./prisma";
import { LOGIN_SUCCESS_REDIRECT } from "@/lib/routes";
import { LoginSchema } from "@/lib/schema";
import { cookies } from "next/headers";
import * as jose from "jose";
import { JWT } from "next-auth/jwt";

const alg = "HS256";
const ROTATE_PERIOD = 60 * 2;
const COOKIE_TOKEN_KEY = "next-auth.session-token";
const jwtKey = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

export const createUser = async (data: any) => {
  const validateData = LoginSchema.safeParse(data);
  if (!validateData.success) {
    // handle error then return
    validateData.error;
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await prismaClient.user.create({
    data: {
      userEmail: data.userEmail,
      password: hashedPassword,
    },
  });
  console.log(`User created: ${JSON.stringify(user)}`);
  return user;
};

export const validateUser = async (userEmail: string, password: string) => {
  const user = await prismaClient.user.findUnique({
    where: {
      userEmail,
    },
  });

  if (!user) {
    throw new Error(`User login failed`);
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw new Error("User login failed");
  }

  return user;
};

export const signJWT = async (data: any): Promise<string> => {
  try {
    const { token } = data;
    const signToken = await new jose.SignJWT({ ...token })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(jwtKey);

    return signToken;
  } catch (error) {
    console.log(`signJWT err`, error);
  }
};

export const encodeJWT = async (data: any): Promise<string> => {
  try {
    const cookieStore = await cookies();
    const cookieToken = cookieStore.get(COOKIE_TOKEN_KEY)?.value;

    if (cookieToken) {
      return cookieToken;
    }

    return await signJWT(data);
  } catch (error) {
    console.log(`encodeJWT err`, error);
  }
};

export const decodeJWT = async (token: any) => {
  try {
    const { payload, protectedHeader } = await jose.jwtVerify(token, jwtKey);
    return { ...payload };
  } catch (error) {
    console.log(`decodeJWT err`, error);
  }
};

export const refreshToken = async (token: any): Promise<JWT> => {
  try {
    const cookieStore = await cookies();
    const cookieToken = cookieStore.get(COOKIE_TOKEN_KEY)?.value;

    if (!cookieToken) {
      return token;
    }

    const { iat } = await decodeJWT(cookieToken);
    const isExpired = Date.now() > (iat + ROTATE_PERIOD) * 1000;
    console.log(`isExpired: ${isExpired}`, Date.now(), iat, ROTATE_PERIOD);

    if (!isExpired) {
      return token;
    }

    const refreshJWT = await signJWT({ ...token });

    cookieStore.set(COOKIE_TOKEN_KEY, refreshJWT);

    return token;
  } catch (error) {
    console.log(`refreshToken err`, error);
  }
};
