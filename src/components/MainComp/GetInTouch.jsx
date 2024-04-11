import React, { useState } from "react";

function GetInTouch({ setComp }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
  });
  return (
    <>
      <div data-step="getInTouch">
        <h3 className="mb-5">How do we get in touch with you?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-6 col-lg-6">
                <input
                  required
                  type="text"
                  inputMode="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className="form-control p-3"
                  value={userData.firstName}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                />
                <div className="invalid-feedback" />
              </div>
              <div className="col-6 col-lg-6">
                <input
                  required
                  type="text"
                  inputMode="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="form-control p-3"
                  value={userData.lastName}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                />
                <div className="invalid-feedback" />
              </div>
              <div className="col-12 col-lg-12">
                <input
                  required
                  type="email"
                  inputMode="email"
                  name="emailAddress"
                  id="emailAddress"
                  placeholder="Email Address"
                  className="form-control p-3"
                  value={userData.emailAddress}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      emailAddress: e.target.value,
                    }))
                  }
                />
                <div className="invalid-feedback" />
              </div>
              <div className="col-12 col-lg-12">
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  className="form-control p-3"
                  maxLength={14}
                  value={userData.phoneNumber}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      phoneNumber: e.target.value,
                    }))
                  }
                />
                <div className="invalid-feedback" />
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary py-3 px-5"
          onClick={() =>
            userData.firstName &&
            setComp({
              question: "How do we get in touch with you?",
              answer: userData,
            })
          }
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default GetInTouch;
