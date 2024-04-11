import React from "react";

function MonthlyBudget({ setComp }) {
  return (
    <>
      <div data-step="monthlyBudget">
        <h3 className="mb-5">What is your monthly budget?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyBudget"
                  id="monthlyBudget-$300 - $399 / mth"
                  defaultValue="$300 - $399 / mth"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyBudget-$300 - $399 / mth"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly budget?",
                      answer: "$300 - $399 / mth",
                    })
                  }
                >
                  $300 - $399 / mth
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyBudget"
                  id="monthlyBudget-$400 - $499 / mth"
                  defaultValue="$400 - $499 / mth"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyBudget-$400 - $499 / mth"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly budget?",
                      answer: "$400 - $499 / mth",
                    })
                  }
                >
                  $400 - $499 / mth
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyBudget"
                  id="monthlyBudget-$500+ / mth"
                  defaultValue="$500+ / mth"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyBudget-$500+ / mth"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly budget?",
                      answer: "$500+ / mth",
                    })
                  }
                >
                  $500+ / mth
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyBudget"
                  id="monthlyBudget-Under $300 / mth"
                  defaultValue="Under $300 / mth"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyBudget-Under $300 / mth"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly budget?",
                      answer: "Under $300 / mth",
                    })
                  }
                >
                  Under $300 / mth
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className="small text-muted mb-0">
          By letting us know how much you can afford, we are able to match you
          with the best financing to meets your needs.
        </p>
      </div>
    </>
  );
}

export default MonthlyBudget;
