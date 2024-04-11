import React from "react";

function IncomeLength({ setComp }) {
  return (
    <>
      <div data-step="incomeLength">
        <h3 className="mb-5">How long have you been receiving this income?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="incomeLength"
                  id="incomeLength-3 Months - 2 Years"
                  defaultValue="3 Months - 2 Years"
                  className="btn-check"
                />
                <label
                  htmlFor="incomeLength-3 Months - 2 Years"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "How long have you been receiving this income?",
                      answer: "3 Months - 2 Years",
                    })
                  }
                >
                  3 Months - 2 Years
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="incomeLength"
                  id="incomeLength-2 Years+"
                  defaultValue="2 Years+"
                  className="btn-check"
                />
                <label
                  htmlFor="incomeLength-2 Years+"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "How long have you been receiving this income?",
                      answer: "2 Years+",
                    })
                  }
                >
                  2 Years+
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="incomeLength"
                  id="incomeLength-Less Than 3 Months"
                  defaultValue="Less Than 3 Months"
                  className="btn-check"
                />
                <label
                  htmlFor="incomeLength-Less Than 3 Months"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "How long have you been receiving this income?",
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
        <p className="small text-muted mb-0">
          We require a minimum employment period of 3 months in order to get you
          approved.
        </p>
      </div>
    </>
  );
}

export default IncomeLength;
