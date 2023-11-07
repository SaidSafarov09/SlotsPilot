import React from "react";
import "./style.scss";
import { Layout, LayoutProps } from "./Components/Layout/Layout";

function App({}: LayoutProps) {
  return (
    <div className="App">
      <Layout header footer></Layout>
    </div>
  );
}

export default App;
