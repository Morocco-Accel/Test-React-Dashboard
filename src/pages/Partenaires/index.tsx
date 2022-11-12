import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {} from "./components";
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
          <div></div>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Nothing</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
