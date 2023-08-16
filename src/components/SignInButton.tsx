"use client";

import { FC, useState } from "react";
import {Button} from "./ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "@/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
