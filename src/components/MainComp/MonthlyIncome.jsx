import React from "react";

function MonthlyIncome({ setComp }) {
  return (
    <>
      <div data-step="monthlyIncome">
        <h3 className="mb-5">What is your monthly income?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyIncome"
                  id="monthlyIncome-$2000 - $2500"
                  defaultValue="$2000 - $2500"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyIncome-$2000 - $2500"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly income?",
                      answer: "$2000 - $2500",
                    })
                  }
                >
                  $2000 - $2500
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyIncome"
                  id="monthlyIncome-$2501 - $3500"
                  defaultValue="$2501 - $3500"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyIncome-$2501 - $3500"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly income?",
                      answer: "$2501 - $3500",
                    })
                  }
                >
                  $2501 - $3500
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyIncome"
                  id="monthlyIncome-$3501 - $4500"
                  defaultValue="$3501 - $4500"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyIncome-$3501 - $4500"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly income?",
                      answer: "$3501 - $4500",
                    })
                  }
                >
                  $3501 - $4500
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyIncome"
                  id="monthlyIncome-$4500+"
                  defaultValue="$4500+"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyIncome-$4500+"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly income?",
                      answer: "$4500+",
                    })
                  }
                >
                  $4500+
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className="small text-muted mb-5">
          We require a minimum income of $2000 per month in order to get you
          approved.
        </p>
      </div>
    </>
  );
}

export default MonthlyIncome;
