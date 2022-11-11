import React from "react";
import { Link } from "react-router-dom";

type linkButtonType = {
  TITLE: string;
  LINK_TO: string;
};
export function LinkButton({ LINK_TO, TITLE }: linkButtonType) {
  return (
    <Link className="LINK_BUTTON" to={LINK_TO}>
      {TITLE}
    </Link>
  );
}
