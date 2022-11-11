import React from "react";
type avatarType = {
  ALT: string;
  IMAGE_LINK: string;
};
export function Avatar({ IMAGE_LINK, ALT }: avatarType) {
  return <img alt={ALT} src={IMAGE_LINK} className="AVATAR" />;
}
