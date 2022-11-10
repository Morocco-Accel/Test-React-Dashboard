import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { refreshAuthLogic } from "./UseRefreshToken";
import env from "react-dotenv";

export const client = axios.create({
  baseURL: env.API_URL_HOME, //API_URL_HOME, //API_URL_GREY,
});

export const setHeaderToken = (token: string) => {
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
  console.log("Token change : " + token);
};

export const removeAuthHeader = () => {
  client.defaults.headers.common.Authorization = "";
};

createAuthRefreshInterceptor(client, refreshAuthLogic, {
  statusCodes: [403], // default: [ 401 ]
  //pauseInstanceWhileRefreshing: true,
  //
});
