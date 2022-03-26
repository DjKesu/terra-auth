import React from "react";

function Header() {
  return (
    <header className="Header">
      <h1 
      style={{
          fontFamily: "Montserrat",
          fontSize: 30,
          fontWeight: "bold",
          color: "black",
          textAlign: "center"}}>
      Terra Station Authentication</h1>
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: 14,
          color: "black",
          textAlign: "center"
        }}
      >
        Enjoy web3 in web2
      </p>
    </header>
  );
}

export default Header;
