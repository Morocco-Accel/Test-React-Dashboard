import axios from "axios";

import env from "react-dotenv";

export const client = axios.create({
  baseURL: env.TEST_API, //API_URL_HOME, //API_URL_GREY,
});
