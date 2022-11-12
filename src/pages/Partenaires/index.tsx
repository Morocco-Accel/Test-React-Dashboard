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
export function Partenaires() {
  return (
    <div className="PARTENAIRES_CONTAINER">
      <div className="SE_CONTAINER">
        <Tabs>
          <TabList className="">
            <Tab>Liste des Partenaires</Tab>
            <Tab>
              Demandes de Partenariat <span>4</span>
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
          </TabPanel>
          <TabPanel>
            <h2>Nothing</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
