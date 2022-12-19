"use client";

import React from "react";
import { getProviders, signIn } from "next-auth/react";

const SignInComponent = ({ providers }) => {
  return (
    <div className='flex justify-center'>
      {Object.values(providers).map((e) => {
        console.log(providers);
        return (
          <div key={e.name}>
            <button
              onClick={() =>
                signIn(e.id, {
                  callbackUrl:
                    process.env.VERCEL_URL || "http://localhost:3000",
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
