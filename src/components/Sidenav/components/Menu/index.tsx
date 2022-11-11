import React from "react";

type menuType = {
  TITLE: string;
  CHILDREN: any;
};
export function MenuLink({ CHILDREN, TITLE }: menuType) {
  return (
    <div className="MENU_CONTAINER">
      <p>{TITLE}</p> {CHILDREN}
    </div>
  );
}
