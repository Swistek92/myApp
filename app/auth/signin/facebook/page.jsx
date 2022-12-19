import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div>
      <div>
        <h1>sign in wiht fb</h1>
      </div>
      <div>
        <SignInComponent providers={providers} />
      </div>
    </div>
  );
};

export default SignInPage;
