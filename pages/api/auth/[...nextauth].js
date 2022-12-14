import NextAuth from "next-auth";
import connectDB from "../../../utils/connectDB";
import Users from "./../../../models/userModel";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: { strategy: "jwt" },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
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

        // console.log("pass compare", compare1);
        if (!compare1) {
          throw new Error("bad password ");
        }

        console.log("RETURNING OBJECT FROM CREDENTAIL PROVIDER", user);

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("credentials");
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      // console.log("SESSION ", session, token);
      // console.log("TOKEN ROLE", token.role);
      // if (session.image.includes("fsbx")) {
      //   return session;
      // }
      // session.user.role = user.role;
      if (session) {
        if (!session.user.image.includes("cloudinary")) {
          return session;
        }
        const user = await Users.findOne({ email: session.user.email });

        if (session.user) {
          session.user.role = user.role;
        }
      }

      // return session;
      // massage our session
      // if (token.role && session.user) {
      //   session.user.role = token.role;
      // }
      return session;
    },
  },
  async jwt({ token, user }) {
    if (user) {
      // user is only given the first time but when you write tokens they stick around
      token.role = user.role;
    }
    return token;
  },

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
});
