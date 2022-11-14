import React from "react";

type pCardType = {
  AVATAR_URL: string;
  FULL_NAME: string;
  TELEPHONE: string;
  EMAIL: string;
  ZONES: any;
  DISPO: string;
  ID: number;
};
export function Pcard({
  AVATAR_URL,
  EMAIL,
  FULL_NAME,
  TELEPHONE,
  ZONES,
  DISPO,
  ID,
}: pCardType) {
  return (
    <div key={ID} className="CARD_P">
      <div className="CONTAINER_P">
        <div className="CARD_LEFT">
          <div className="ZONE_USER">
            <img className="AVATAR" src={AVATAR_URL} alt="p_avatar" />
            <div className="ZONE_UZ">
              <p>{FULL_NAME}</p>
              <div className="ZONE_CON"> {ZONES} </div>
            </div>
          </div>
        </div>
        <div className="CARD_RIGHT">
          <div className="ZONE_TE">
            <p> {TELEPHONE} </p>
            <p> {EMAIL} </p>
          </div>
          <div className="DISPO_P">
            <div>
              <span className={DISPO !== null ? "DISPO" : ""} />
              {DISPO}
            </div>
            <button className="DATE_B">
              <i className="far fa-calendar"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
