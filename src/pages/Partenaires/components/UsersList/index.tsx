import React from "react";
import { Pcard } from "../PartenairesCard";
import { IsLoadingComp } from "components";
import { useUsers } from "api";
export function UsersList() {
  const { data, isLoading, isError } = useUsers();
  if (isLoading || isError) {
    <IsLoadingComp />;
  }
  return (
    <div className="USERS_LIST">
      {data?.map((item) => {
        return (
          <Pcard
            ID={item.id}
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
