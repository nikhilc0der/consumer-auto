import React from "react";

function VehicleType({ setComp }) {
  return (
    <>
      <div data-step="vehicleType" style={{ display: "block" }}>
        <h3 className="mb-5">What type of vehicle are you looking for?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-12">
            <div className="row gy-4">
              <div className="col-6 col-lg-3">
                <input
                  required
                  type="radio"
                  name="vehicleType"
                  id="vehicleType-Car"
                  defaultValue="Car"
                  className="btn-check"
                />
                <label
                  htmlFor="vehicleType-Car"
                  className="btn btn-light rounded shadow-sm w-100 pb-3"
                  onClick={() =>
                    setComp({
                      question: "What type of vehicle are you looking for?",
                      answer: "Car",
                    })
                  }
                >
                  <img
                    src="https://consumerauto.ca/apply-now/images/vehicleType-Car.png"
                    alt="Car"
                    className="w-100"
                  />
                  Car{" "}
                </label>
              </div>
              <div className="col-6 col-lg-3">
                <input
                  required
                  type="radio"
                  name="vehicleType"
                  id="vehicleType-Truck"
                  defaultValue="Truck"
                  className="btn-check"
                />
                <label
                  htmlFor="vehicleType-Truck"
                  className="btn btn-light rounded shadow-sm w-100 pb-3"
                  onClick={() =>
                    setComp({
                      question: "What type of vehicle are you looking for?",
                      answer: "Truck",
                    })
                  }
                >
                  <img
                    src="https://consumerauto.ca/apply-now/images/vehicleType-Truck.png"
                    alt="Truck"
                    className="w-100"
                  />
                  Truck{" "}
                </label>
              </div>
              <div className="col-6 col-lg-3">
                <input
                  required
                  type="radio"
                  name="vehicleType"
                  id="vehicleType-SUV"
                  defaultValue="SUV"
                  className="btn-check"
                />
                <label
                  htmlFor="vehicleType-SUV"
                  className="btn btn-light rounded shadow-sm w-100 pb-3"
                  onClick={() =>
                    setComp({
                      question: "What type of vehicle are you looking for?",
                      answer: "SUV",
                    })
                  }
                >
                  <img
                    src="https://consumerauto.ca/apply-now/images/vehicleType-SUV.png"
                    alt="SUV"
                    className="w-100"
                  />
                  SUV{" "}
                </label>
              </div>
              <div className="col-6 col-lg-3">
                <input
                  required
                  type="radio"
                  name="vehicleType"
                  id="vehicleType-Van"
                  defaultValue="Van"
                  className="btn-check"
                />
                <label
                  htmlFor="vehicleType-Van"
                  className="btn btn-light rounded shadow-sm w-100 pb-3"
                  onClick={() =>
                    setComp({
                      question: "What type of vehicle are you looking for?",
                      answer: "Van",
                    })
                  }
                >
                  <img
                    src="https://consumerauto.ca/apply-now/images/vehicleType-Van.png"
                    alt="Van"
                    className="w-100"
                  />
                  Van{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className="small text-muted mb-0">
          Don't worry, you can change your mind about the kind of vehicle you
          want at any time.
        </p>
      </div>
    </>
  );
}

export default VehicleType;
