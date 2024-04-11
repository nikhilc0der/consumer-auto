import React from "react";

function EmploymentStatus({ setComp }) {
  return (
    <>
      <div data-step="employmentStatus">
        <h3 className="mb-5">What is your employment status?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="employmentStatus"
                  id="employmentStatus-Employed"
                  defaultValue="Employed"
                  className="btn-check"
                />
                <label
                  htmlFor="employmentStatus-Employed"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your employment status?",
                      answer: "Employed",
                    })
                  }
                >
                  Employed
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="employmentStatus"
                  id="employmentStatus-Self-Employed"
                  defaultValue="Self-Employed"
                  className="btn-check"
                />
                <label
                  htmlFor="employmentStatus-Self-Employed"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your employment status?",
                      answer: "Self-Employed",
                    })
                  }
                >
                  Self-Employed
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="employmentStatus"
                  id="employmentStatus-Retired / Pension"
                  defaultValue="Retired / Pension"
                  className="btn-check"
                />
                <label
                  htmlFor="employmentStatus-Retired / Pension"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your employment status?",
                      answer: "Retired / Pension",
                    })
                  }
                >
                  Retired / Pension
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className="small text-muted mb-0">
          ODSP, AISH, CPP, child support and income earned from ride share or
          delivery services are not accepted types of income.
        </p>
      </div>
    </>
  );
}

export default EmploymentStatus;
