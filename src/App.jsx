import React, { useState } from "react";
import QueueList from "./components/QueueList";
import TableView from "./components/TableView";
import Navbar from "./components/Navbar";
import RepairHistoryItem from "./components/RepairHistoryItem";

import "./App.css";

import repairKitImg from "./assets/advancedkit.png";
import boltAssemblyImg from "./assets/boltassembly.png";
import hammerPImg from "./assets/hammerP.png";

function App() {
  const [activeTab, setActiveTab] = useState("Queue");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const historyData = [
    {
      id: 1,
      name: "Repair Kit",
      date: "2024-06-17 16:07",
      image: repairKitImg,
    },
    {
      id: 2,
      name: "Bolt Assembly",
      date: "2024-02-17 11:26",
      image: boltAssemblyImg,
    },
    {
      id: 3,
      name: "Hammer P",
      date: "2024-01-01 08:15",
      image: hammerPImg,
    },
  ];

  return (
    <div className="min-h-screen p-2 sm:p-3 md:p-4 bg-gradient-to-b from-[#2a2a2a] to-[#1c1c1c] flex justify-center">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-5xl xl:max-w-6xl bg-gradient-to-b from-[#2a2a2a] to-[#151520] rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6">
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Conditionally render components based on active tab */}
        {activeTab === "Queue" && <QueueList />}
        {activeTab === "Table" && <TableView />}
        {activeTab === "History" && (
          <div className="mt-4 flex flex-col items-center gap-4">
            {historyData.map((item) => (
              <RepairHistoryItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
