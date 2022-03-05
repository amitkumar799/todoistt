import React, { useState } from "react";
import Tasks from "./Tasks";
import Sidebar from "./Sidebar";

// inbox
///Next_7
//today

const Content = () => {
    const [selectedTab, setSelectedTab] = useState("INBOX")
  return (
    <section className="content">
     <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
     <Tasks />
    </section>
  );
};

export default Content;