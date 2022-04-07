import React from "react";
import Create from "../../components/create/Create";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <List /> <Create />
    </div>
  );
}
