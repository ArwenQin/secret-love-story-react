import React from "react";
import TuitsList from "../tuits-list";

import "./index.css";
import WhatsHappening from "./whats-happening";



function HomeScreen() {
  return(
  <>

  <h4>Home</h4>
    <WhatsHappening/>
  <TuitsList/>
  </>)
}
export default HomeScreen;