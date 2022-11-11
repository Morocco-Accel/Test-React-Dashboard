import React from "react";

type imgIconType = {
  ALT: string;
  URL: string;
};
export function ImgIcon({ ALT, URL }: imgIconType) {
  return <img className="LINK_IMG" alt={ALT} src={URL} />;
}
