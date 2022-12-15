"use client";

import React from "react";
import { getProviders, signIn } from "next-auth/react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

const SignInComponent = ({ providers }: Props) => {
  return (
    <div className='flex justify-center'>
      {Object.values(providers!).map((e) => {
        return (
          <div key={e.name}>
            <button
              className='bg-blue-500 mx-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'
              onClick={() =>
                signIn(e.id, {
                  redirect: false,
                  // callbackUrl:
                  //   process.env.VERCEL_URL || "http://localhost:3000",
                })
              }
            >
              Sign in with {e.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SignInComponent;
