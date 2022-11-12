import React from "react";

type pCardType = {
  AVATAR_URL: string;
  FULL_NAME: string;
  TELEPHONE: string;
  EMAIL: string;
  ZONES: any;
  DISPO: string;
};
export function Pcard({
  AVATAR_URL,
  EMAIL,
  FULL_NAME,
  TELEPHONE,
  ZONES,
  DISPO,
}: pCardType) {
  return (
    <div className="CARD_P">
      <div className="CONTAINER_P">
        <img className="AVATAR" src={AVATAR_URL} alt="p_avatar" />
        <div className="ZONE_CON"> {ZONES} </div>
        <p>{FULL_NAME}</p>
        <p> {TELEPHONE} </p>
        <p> {EMAIL} </p>
        <div className="DISPO_P">
          <div>
            <span className={DISPO === "Disponible" ? "DISPO" : ""} />
            {DISPO}
          </div>
          <button className="DATE_B">
            <i className="far fa-calendar"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
