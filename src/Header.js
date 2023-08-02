import React from "react";
import { Button } from "primereact/button";

const Header = ({ onMenuToggle }) => {
  return (
    <header
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#4da7fe",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div className="header-logo">
        <Button
          icon="pi pi-bars"
          className="p-mr-2"
          onClick={onMenuToggle}
        />

        <span style={{marginLeft: "10px"}}>Delli Admin</span>  
      </div>
      <div className="header-buttons">
        <Button label="로그아웃" />
      </div>
    </header>
  );
};

export default Header;
