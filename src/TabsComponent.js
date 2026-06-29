import React from 'react';
import { useState, useEffect } from 'react';

const TabsComponent = () => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      tabName: "One",
      tabContent: "Oneeee",
    },
    {
      id: 2,
      tabName: "Two",
      tabContent: "twoooo",
    },
    {
      id: 3,
      tabName: "Three",
      tabContent: "Othehheeeeee",
    },
  ]);

  const [currTab, setCurrTab] = useState(1);
  return (
    <div className="App">
      <h6>Tabs</h6>
      {tabs &&
        tabs.map((tab, index) => {
          return (
            <button onClick={() => setCurrTab(tab.id)}>{tab.tabName}</button>
          );
        })}
      <br></br>

      {tabs.find((item) => item.id === currTab)?.tabContent}
    </div>
  );
}

export default TabsComponent;
