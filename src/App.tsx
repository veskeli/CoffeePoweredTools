import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import HomeTab from "./HomeTab";
import Settings from "./Settings";

function App() {
  return (
    <main className="container">
      <Tabs selectedTabClassName="react-tabs__tab--selected">
          <TabList>
            <img src="/GameScripts.ico" className="homeicon" alt="Vite logo" />
            <Tab>Home</Tab>
            <Tab>Settings</Tab>
          </TabList>
            <TabPanel>
              <HomeTab />
            </TabPanel>
            <TabPanel>
              <Settings />
            </TabPanel>
      </Tabs>
    </main>
  );
}

export default App;
