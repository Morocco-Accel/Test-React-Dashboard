import React from "react";

type pCardType = {
  AVATAR_URL: string;
  FULL_NAME: string;
  TELEPHONE: string;
  EMAIL: string;
};
export function Pcard({ AVATAR_URL, EMAIL, FULL_NAME, TELEPHONE }: pCardType) {
  return (
    <div className="CARD_P">
      <div className="CONTAINER_P">
        <img className="AVATAR" src={AVATAR_URL} alt="p_avatar" />
        <div></div>
        <p>{FULL_NAME}</p>
        <p> {TELEPHONE} </p>
        <div></div>
      </div>
    </div>
  );
}
