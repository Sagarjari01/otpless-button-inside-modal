import React from "react";

const LoginModal = () => {
  const closeModal = (e) => {
    const modalContainer = document.getElementById("modalContainer");
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
  };
  return (
    <div>
      <div class="modal-container" id="modalContainer" onClick={closeModal}>
        <div class="modal">
          <div className="button-otpless" id="otpless" custom="true">
            OTPless
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
