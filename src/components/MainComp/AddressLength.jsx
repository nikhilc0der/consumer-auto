import React from "react";

function AddressLength({ setComp }) {
  return (
    <>
      <div data-step="addressLength">
        <h3 className="mb-5">How long have you been living at this address?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="row gy-4">
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="addressLength"
                  id="addressLength-3 Months - 2 Years"
                  defaultValue="3 Months - 2 Years"
                  className="btn-check"
                />
                <label
                  htmlFor="addressLength-3 Months - 2 Years"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question:
                        "How long have you been living at this address?",
                      answer: "3 Months - 2 Years",
                    })
                  }
                >
                  3 Months - 2 Years
                </label>
              </div>
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="addressLength"
                  id="addressLength-2 Years+"
                  defaultValue="2 Years+"
                  className="btn-check"
                />
                <label
                  htmlFor="addressLength-2 Years+"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question:
                        "How long have you been living at this address?",
                      answer: "2 Years+",
                    })
                  }
                >
                  2 Years+
                </label>
              </div>
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="addressLength"
                  id="addressLength-Less Than 3 Months"
                  defaultValue="Less Than 3 Months"
                  className="btn-check"
                />
                <label
                  htmlFor="addressLength-Less Than 3 Months"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question:
                        "How long have you been living at this address?",
                      answer: "Less Than 3 Months",
                    })
                  }
                >
                  Less Than 3 Months
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className="small text-muted">
          Your address details help us determine a suitable budget and loan
          amount that will maximize your chance of getting approved.
        </p>
      </div>
    </>
  );
}

export default AddressLength;
