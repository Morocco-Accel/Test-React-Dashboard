import React from "react";
import { Link } from "react-router-dom";

type linkButtonType = {
  TITLE: string;
  LINK_TO: string;
};
export function LinkButtonE({ LINK_TO, TITLE }: linkButtonType) {
  return (
    <Link className="LINK_BUTTON_E" to={LINK_TO}>
      {TITLE}
    </Link>
  );
}
