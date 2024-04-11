import React, { useState } from "react";

function WhereYouWork({ setComp }) {
  const [workplace, setWorkplace] = useState("");
  return (
    <>
      <div data-step="whereYouWork">
        <h3 className="mb-5">Where do you work?</h3>
        <div className="row justify-content-center mb-3">
          <div className="col-lg-4">
            <div className="row gy-4">
              <div className="col-12 col-lg-12">
                <input
                  type="text"
                  inputMode="text"
                  name="whereYouWork"
                  id="whereYouWork"
                  value={workplace}
                  onChange={(e) => setWorkplace(e.target.value)}
                  className="form-control p-3"
                />
                <div className="invalid-feedback" />
              </div>
            </div>
          </div>
        </div>
        <p className="small text-muted mb-5">
          This information will help us determine the rate you qualify for.
        </p>
        <button
          type="button"
          className="btn btn-primary py-3 px-5"
          onClick={() =>
            workplace &&
            setComp({
              question: "Where do you work?",
              answer: workplace,
            })
          }
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default WhereYouWork;
