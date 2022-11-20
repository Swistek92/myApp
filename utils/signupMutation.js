import React from "react";
import { useMutation } from "react-query";
import axios from "axios";

const signupMutation = () =>
  useMutation({
    mutationFn: (user) => {
      return axios.post("/api/auth/signup", user);
    },
  });
export default signupMutation;
