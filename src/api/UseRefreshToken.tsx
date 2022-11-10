import env from "react-dotenv";
import axios from "axios";
import { signOut } from "core";
import { getToken, setToken } from "core/Auth/utils";
import { setHeaderToken } from "./client";

//
const setTokenData = (data: { access_token: string }) => {
  const token = getToken();
  setHeaderToken(data.access_token);
  setToken({ ...token, ...data });
};
//
export const refreshAuthLogic = async (failedRequest: any) => {
  const token = getToken();

  return new Promise((resolve, reject) => {
    axios
      .post(`${env.API_URL_HOME}token/refresh`, token.refresh, {
        params: { token: `Bearer ${token.refresh}` },
      })
      .then(({ data }) => {
        if (data !== null) {
          failedRequest.response.config.headers.Authorization =
            "Bearer " + data.access_token;
          setTokenData(data);
        }

        resolve(data);
      })
      .catch((err) => {
        console.log("error", err);
        signOut();
        reject(err);
      });
  });
};
