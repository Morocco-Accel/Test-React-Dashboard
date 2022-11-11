import { url } from "inspector";
import React, { FC } from "react";

type userInfoType = {
  FIRST_NAME: string;
};
export function UserInfo({ FIRST_NAME }: userInfoType) {
  return (
    <div>
      <h3>Bonjour, {FIRST_NAME} !</h3>
      <p>voici ce qui ce passe sur votre compte aujourd'hui</p>
    </div>
  );
}
