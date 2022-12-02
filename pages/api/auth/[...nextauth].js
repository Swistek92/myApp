import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import { errorMonitor } from "nodemailer/lib/xoauth2";
import connectDB from "../../../utils/connectDB";
import Users from "./../../../models/userModel";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";

export default NextAuth({
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const client = await connectDB();
        const user = await Users.findOne({ email: credentials.email }).select(
          "+password"
        );

        // console.log("login logic user", user);

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
      // console.log("CALLBACKS session", props);
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
});
