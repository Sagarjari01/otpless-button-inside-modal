import React, { useEffect, useState } from "react";
import LoginModal from "./LoginModal";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript";
    document.body.appendChild(script)
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
      // Your code here
    };
    return () => {
      const divid = document.getElementById("otplessIdScript");
      document.body.removeChild(divid);
    };
  }, []);

  const openModal = () =>{
    window.otplessInit()
    const modalContainer = document.getElementById('modalContainer');

    modalContainer.style.display = 'flex';
  };

  return (
    <div>
      <LoginModal />
      <button id="loginBtn" onClick={openModal}>Login</button>
    </div>
  );
};

export default Home;
