import NextAuth from "next-auth";
import connectDB from "../../../utils/connectDB";
import Users from "./../../../models/userModel";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";
import FacebookProvider from "next-auth/providers/facebook";
import jwt from "jsonwebtoken";

export default authOptions({
  session: { strategy: "jwt" },

  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        const client = await connectDB();
        const user = await Users.findOne({ email: credentials.email }).select(
          "+password"
        );

        if (!user) {
          throw new Error("no user found");
        }

        const compare1 = await compare(credentials.password, user.password);

        if (!compare1) {
          throw new Error("bad password ");
        }

        console.log("return objec", {
          name: user.name,
          email: user.email,
          role: user.role,
        });
        return { name: user.name, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      const user = await Users.findOne({ email: session.user.email });

      if (session.user) {
        session.user.role = user.role;
      }

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  jwt: {
    async encode({ secret, token }) {
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      return jwt.verify(token, secret);
    },
  },
});
