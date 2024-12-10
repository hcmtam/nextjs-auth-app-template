import {
  decodeJWT,
  signJWT,
  validateUser,
  refreshToken,
  encodeJWT,
} from "@/server/authorize";
import type { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
// import jwt from "jsonwebtoken";
import * as jose from "jose";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const config = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { username, password } = credentials; // username, password, csrfToken
        const user = await validateUser(username, password);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/sign/login",
    error: "/sign/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      //console.log("jwt nextauth", token, user);
      //return { ...token, ...user };
      return refreshToken({ token, user });
    },
    async session({ session, token, user }) {
      //console.log("local nextauth", session, token, user);
      session.user = token;
      return session;
    },
  },
  jwt: {
    maxAge: 60 * 60,
    async encode(params: {
      token: JWT;
      secret: string;
      maxAge: number;
    }): Promise<string> {
      return await encodeJWT(params);
    },
    async decode({ token }): Promise<any> {
      return await decodeJWT(token);
    },
  },
} satisfies NextAuthOptions;

// // Use it in server contexts
// export function auth(
//   ...args:
//     | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
//     | [NextApiRequest, NextApiResponse]
//     | []
// ) {
//   return getServerSession(...args, config);
// }
