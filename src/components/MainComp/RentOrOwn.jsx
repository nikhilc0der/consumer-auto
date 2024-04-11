import React from "react";

function RentOrOwn({ setComp }) {
  return (
    <>
      <div data-step="rentOrOwn">
        <h3 className="mb-5">Do you rent or own your home?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="rentOrOwn"
                  id="rentOrOwn-Own"
                  defaultValue="Own"
                  className="btn-check"
                />
                <label
                  htmlFor="rentOrOwn-Own"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "Do you rent or own your home?",
                      answer: "Own",
                    })
                  }
                >
                  Own
                </label>
              </div>
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="rentOrOwn"
                  id="rentOrOwn-Rent"
                  defaultValue="Rent"
                  className="btn-check"
                />
                <label
                  htmlFor="rentOrOwn-Rent"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "Do you rent or own your home?",
                      answer: "Rent",
                    })
                  }
                >
                  Rent
                </label>
              </div>
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="rentOrOwn"
                  id="rentOrOwn-Other"
                  defaultValue="Other"
                  className="btn-check"
                />
                <label
                  htmlFor="rentOrOwn-Other"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "Do you rent or own your home?",
                      answer: "Other",
                    })
                  }
                >
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className="small text-muted">
          Your details help us determine a suitable budget and loan amount that
          will maximize your chance of getting approved.
        </p>
      </div>
    </>
  );
}

export default RentOrOwn;
