import NextAuth, { NextAuthOptions } from "next-auth";

import { config as authConfig } from "@/lib/auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
