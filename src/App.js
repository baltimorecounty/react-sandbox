// import "@baltimorecounty/dotgov-components/lib/styles/dotgov.min.css";
import React from "react";
import { Run } from "./startup";
import DecisionTree from "./components/DecisionTree";

Run();

function App() {
  // console.log("data:" + JSON.stringify(data));
  return <DecisionTree />;
}

export default App;
