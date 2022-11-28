import React from "react";
import { useMutation } from "react-query";
import axios from "axios";

const sendEmailMutation = (email) =>
  useMutation({
    mutationFn: (email) => {
      return axios.post("/api/contact/contact", email);
    },
  });
export default sendEmailMutation;
