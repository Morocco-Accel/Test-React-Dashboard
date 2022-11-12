import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  AddButton,
  SearchInput,
  TableP,
  FilterButton,
  UsersList,
} from "./components";

export function Partenaires() {
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
            <UsersList />
          </TabPanel>
          <TabPanel>
            <h1>Nothing</h1>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
