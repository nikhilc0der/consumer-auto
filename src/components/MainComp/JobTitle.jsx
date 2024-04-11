import React, { useState } from "react";

function JobTitle({ setComp }) {
  const [job, setJob] = useState("");
  return (
    <>
      <div data-step="jobTitle">
        <h3 className="mb-5">What is your job title?</h3>
        <div className="row justify-content-center mb-3">
          <div className="col-lg-4">
            <div className="row gy-4">
              <div className="col-12 col-lg-12">
                <input
                  required
                  type="text"
                  inputMode="text"
                  name="jobTitle"
                  id="jobTitle"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
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
            job &&
            setComp({
              question: "What is your job title?",
              answer: job,
            })
          }
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default JobTitle;
