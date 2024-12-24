import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App.css";
import HomeTab from "./HomeTab";
import Settings from "./Settings";
import { FaHome, FaCog, FaBars } from "react-icons/fa";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  }

  return (
    <main className="container">
      <Tabs selectedTabClassName="react-tabs__tab--selected">
        <TabList className={collapsed ? "tab-list-collapsed" : "tab-list-expanded"}>
            <button onClick={toggleCollapse} className="collapse-button">
              <FaBars/> {!collapsed && "Collapse"}
            </button>
            <img src="/GameScripts.ico" className="homeicon" alt="Vite logo" />
            <Tab>
              <FaHome/> {!collapsed && "Home"}
            </Tab>
            <Tab>
              <FaCog/> {!collapsed && "Settings"}
            </Tab>
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
