import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  AddButton,
  Pcard,
  SearchInput,
  TableP,
  FilterButton,
} from "./components";
import { useUsers } from "api";
export function Partenaires() {
  const { data, isLoading } = useUsers();
  if (isLoading) {
    <h1>isLoading....</h1>;
  }
  return (
    <div className="PARTENAIRES_CONTAINER">
      <div className="SE_CONTAINER">
        <Tabs>
          <TabList>
            <Tab>
              <h2>Liste des Partenaires</h2>
            </Tab>
            <Tab>
              <h2>
                Demandes de Partenariat<span>4</span>
              </h2>
            </Tab>
          </TabList>
          <div className="INFO_ROW">
            <AddButton />
            <div className="FILTER_POS">
              <SearchInput />
              <FilterButton />
            </div>
          </div>

          <TabPanel>
            <TableP />
            {data?.map((item) => {
              return (
                <Pcard
                  AVATAR_URL={item.avatar}
                  EMAIL={item.email}
                  FULL_NAME={item.name}
                  TELEPHONE={item.telephone}
                  ZONES={null}
                  DISPO={item.disponible}
                />
              );
            })}
            <Pcard
              AVATAR_URL="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1001.jpg"
              EMAIL="erin@outlook.com"
              FULL_NAME="Justin Herwitz"
              TELEPHONE="+33 77 89 67 89"
              ZONES={null}
              DISPO="Disponible"
            />
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
