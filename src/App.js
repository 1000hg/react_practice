import React, { useState } from "react";
import Header from "./Header";
import Left from "./Left";
import SubLeft from "./SubLeft";
import { Reset } from "styled-reset";
import "./styles.css";

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <React.Fragment>
      <Reset />
      <Header onMenuToggle={handleMenuToggle} />
      <div style={{ display: "flex" }}>
        <Left />
        <SubLeft />
      </div>
    </React.Fragment>
  );
};

export default App;