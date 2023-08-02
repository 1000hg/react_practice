import React from "react";
import { Button } from "primereact/button";

const Left = () => {
  return (
    <div
      style={{
        width: "70px",
        height: "100vh",
        backgroundColor: "#4da7fe",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        label="버튼 1"
        style={{
          width: "70px",
          height: "70px",
          padding: "0",
          margin: "0",
          borderRadius: "0",
        }}
        className="p-button-hover"
      />
      <Button
        label="버튼 2"
        style={{
          width: "70px",
          height: "70px",
          padding: "0",
          margin: "0",
          borderRadius: "0",
        }}
        className="p-button-hover"
      />
      <Button
        label="버튼 3"
        style={{
          width: "70px",
          height: "70px",
          padding: "0",
          margin: "0",
          borderRadius: "0",
        }}
        className="p-button-hover"
      />
    </div>
  );
};

export default Left;
