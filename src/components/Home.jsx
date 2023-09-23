import React, { useEffect, useState } from "react";

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

  const closeModal = (e) => {
    const modalContainer = document.getElementById('modalContainer');
    if (e.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  };
  return (
    <div>
      <div class="modal-container" id="modalContainer" onClick={closeModal}>
        <div class="modal">
          <div className="button-otpless" id="otpless" custom="true">OTPless</div>
        </div>
      </div>
      <button id="loginBtn" onClick={openModal}>Login</button>
    </div>
  );
};

export default Home;
