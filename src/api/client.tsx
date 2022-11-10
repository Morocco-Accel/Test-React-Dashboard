import React from "react";
import env from "react-dotenv";
import axios from "axios";

export const client = axios.create({
  baseURL: env.TEST_API,
});
