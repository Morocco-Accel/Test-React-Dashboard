import React from "react";
import { Pcard } from "../PartenairesCard";
import { useUsers } from "api";
export function UsersList() {
  const { data, isLoading } = useUsers();
  if (isLoading) {
    <h1>isLoading....</h1>;
  }
  return (
    <div className="USERS_LIST">
      {data?.map((item) => {
        return (
          <Pcard
            AVATAR_URL={item.avatar}
            EMAIL={item.email}
            FULL_NAME={item.name}
            TELEPHONE={item.telephone}
            ZONES={item.lieux.map((item) => {
              return <span>{item?.code}</span>;
            })}
            DISPO={item.disponible}
          />
        );
      })}
    </div>
  );
}
