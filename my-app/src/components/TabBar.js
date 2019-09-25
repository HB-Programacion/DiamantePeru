import React from "react";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

const TabBar= () => {
  const tab = useTabState();
  return (
    <>
      <TabList {...tab} aria-label="My tabs" className="text-size12 tab">
        <Tab {...tab} stopId="tab1">
          HOME
        </Tab>
        <Tab {...tab} stopId="tab2">
          DIAMANTE PERU
        </Tab>
        <Tab {...tab} stopId="tab3">
          DIAMANTES
        </Tab>
        <Tab {...tab} stopId="tab3">
          NOVIOS
        </Tab>
        <Tab {...tab} stopId="tab3">
          JOYAS
        </Tab>
      </TabList>
      <TabPanel {...tab} stopId="tab1">
        HISTORIA
      </TabPanel>
      <TabList >
      <Tab {...tab} stopId="tab1">HISTORIA</Tab>
        
      </TabList>
      <TabPanel {...tab} stopId="tab2">
        Tab 2
      </TabPanel>
      <TabPanel {...tab} stopId="tab3">
        Tab 3
      </TabPanel>
    </>
  );
}
export default TabBar;
