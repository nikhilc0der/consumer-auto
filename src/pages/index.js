import Footer from "@/components/Footer";
import React, { useState } from "react";
import MainComp from "@/components/MainComp/MainComp";

export default function index() {
  const [isOpen, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <MainComp setModal={setModal} />
      <Footer />
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-btn" onClick={closeModal}>
              <a
                href="/"
                style={{ color: "black", textDecorationLine: "blink" }}
              >
                Close
              </a>
            </button>
            <div className="modal-content">
              Thanks for submitting we will reach you out soon
            </div>
          </div>
        </div>
      )}
    </>
  );
}
