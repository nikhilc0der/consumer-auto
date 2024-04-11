import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark text-light text-center py-5 border-bottom border-light">
        <div className="container">
          <a href="/">
            <img src="/logo.png" alt="ConsumerAuto" style={{ width: 150 }} />
          </a>
          <p className="mt-3 mb-0">
            <a href="tel:1-866-520-8160" className="text-reset">
              1-866-520-8160
            </a>
          </p>
        </div>
      </div>
      <div className="bg-dark small text-light text-center py-4">
        <div className="container">
          <p className="mb-2">© Copyright 2024, All Rights Reserved</p>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://www.instagram.com/carbuyersunion?igsh=aDZwNG1udHRwaWNn&utm_source=qr"
              target="_blank"
            >
              <img
                src="https://consumerauto.ca/apply-now/images/icon-instagram.svg"
                alt="instagram"
                style={{ width: 16 }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;