import React from "react";

function Header() {
  return (
    <header className="Header">
      <h1 
      style={{
          fontSize: 95,
          fontWeight: "bold",
          color: "white",
          textAlign: "center"}}>
      Terra Station Authentication</h1>
      <p
        style={{
          fontSize: 34,
          color: "white",
          textAlign: "center"
        }}
      >
        Enjoy web3 in web2
      </p>
    </header>
  );
}

export default Header;
