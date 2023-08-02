import React, { useState } from "react";

const SubLeft = () => {
  const [buttons, setButtons] = useState([]);

  const handleAddButton = () => {
    setButtons([...buttons, `Button ${buttons.length + 1}`]);
  };

  return (
    <div
      style={{
        width: "300px",
        height: "100vh",
        backgroundColor: "#dfdfdf",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h2 style={{ color: "#000000", margin: "0 0 10px 0", fontSize: "24px", padding: "10px 0" }}>
        Title
      </h2>

    </div>
  );
};

export default SubLeft;
