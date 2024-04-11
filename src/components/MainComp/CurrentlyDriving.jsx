import React from "react";

function CurrentlyDriving({ setComp }) {
  return (
    <>
      <div data-step="currentlyDriving">
        <h3 className="mb-5">Are you currently driving a vehicle?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="row gy-4">
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="currentlyDriving"
                  id="currentlyDriving-No"
                  defaultValue="No"
                  className="btn-check"
                />
                <label
                  htmlFor="currentlyDriving-No"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "Are you currently driving a vehicle?",
                      answer: "No",
                    })
                  }
                >
                  No
                </label>
              </div>
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="currentlyDriving"
                  id="currentlyDriving-Yes, I want to keep it"
                  defaultValue="Yes, I want to keep it"
                  className="btn-check"
                />
                <label
                  htmlFor="currentlyDriving-Yes, I want to keep it"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "Are you currently driving a vehicle?",
                      answer: "Yes, I want to keep it",
                    })
                  }
                >
                  Yes, I want to keep it
                </label>
              </div>
              <div className="col-12 col-lg-4">
                <input
                  required
                  type="radio"
                  name="currentlyDriving"
                  id="currentlyDriving-Yes, I want to trade it in"
                  defaultValue="Yes, I want to trade it in"
                  className="btn-check"
                />
                <label
                  htmlFor="currentlyDriving-Yes, I want to trade it in"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "Are you currently driving a vehicle?",
                      answer: "Yes, I want to trade it in",
                    })
                  }
                >
                  Yes, I want to trade it in
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className="small text-muted">
          We can get you pre-approved with or without a trade in.
        </p>
      </div>
    </>
  );
}

export default CurrentlyDriving;
