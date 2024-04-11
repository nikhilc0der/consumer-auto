import React, { useState } from "react";

function Address({ setComp }) {
  const [isAddress, setIsAddress] = useState({
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  });
  return (
    <>
      <div data-step="address">
        <h3 className="mb-5">What Is Your Address?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-12">
                <input
                  required
                  type="text"
                  inputMode="text"
                  name="streetAddress"
                  id="streetAddress"
                  placeholder="Street Address"
                  className="form-control p-3 pac-target-input"
                  autoComplete="off"
                  value={isAddress.street}
                  onChange={(e) =>
                    setIsAddress((prev) => ({
                      ...prev,
                      street: e.target.value,
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
                  name="cityTown"
                  id="cityTown"
                  placeholder="City / Town"
                  className="form-control p-3"
                  value={isAddress.city}
                  onChange={(e) =>
                    setIsAddress((prev) => ({
                      ...prev,
                      city: e.target.value,
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
                  name="province"
                  id="province"
                  placeholder="Province"
                  className="form-control p-3"
                  value={isAddress.province}
                  onChange={(e) =>
                    setIsAddress((prev) => ({
                      ...prev,
                      province: e.target.value,
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
                  name="postalCode"
                  id="postalCode"
                  placeholder="Postal Code"
                  className="form-control p-3"
                  value={isAddress.postalCode}
                  onChange={(e) =>
                    setIsAddress((prev) => ({
                      ...prev,
                      postalCode: e.target.value,
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
                  name="country"
                  id="country"
                  placeholder="Country"
                  defaultValue="Canada"
                  className="form-control p-3"
                  value={isAddress.country}
                  onChange={(e) =>
                    setIsAddress((prev) => ({
                      ...prev,
                      country: e.target.value,
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
            isAddress.street &&
            setComp({
              question: "What Is Your Address?",
              answer: isAddress,
            })
          }
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default Address;
