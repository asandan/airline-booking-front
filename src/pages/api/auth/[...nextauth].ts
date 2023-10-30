import NextAuth, { AuthOptions, Session, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JWT, JWTDecodeParams, JWTEncodeParams } from "next-auth/jwt";
import jwt from "jsonwebtoken";
import { login } from "@/mutations";

export const authOptions: AuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    async encode(params: JWTEncodeParams): Promise<string> {
      const { token, secret } = params;
      const jwtClaims = {
        id: token!.id,
        name: token!.name,
        email: token!.email,
      };
      return jwt.sign(jwtClaims, secret, {
        expiresIn: "1h",
        algorithm: "HS512",
      });
    },
    async decode(params: JWTDecodeParams): Promise<JWT | null> {
      const { token, secret } = params;
      const decoded = jwt.verify(token!, secret, {
        algorithms: ["HS512"],
      });

      return (decoded || null) as JWT | null;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const loginData = credentials;
        const userData = await login(loginData as any);
        return new Promise((res) => res(userData));
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.accessToken = user.token;
      }

      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user = token;
      return Promise.resolve(session);
    },
  },
};
export default NextAuth(authOptions);
