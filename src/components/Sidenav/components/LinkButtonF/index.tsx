import React from "react";
import { Link } from "react-router-dom";

type linkButtonType = {
  TITLE: string;
  LINK_TO: string;
  LEFT: any;
  RIGHT: any;
};
export function LinkButtonF({ LINK_TO, TITLE, LEFT, RIGHT }: linkButtonType) {
  return (
    <Link className="LINK_BUTTON_F" to={LINK_TO}>
      <div className="CON_F">
        {LEFT}
        {TITLE}
        {RIGHT}
      </div>
    </Link>
  );
}
