import React from "react";

function MonthlyPayment({ setComp }) {
  return (
    <>
      <div data-step="monthlyPayment">
        <h3 className="mb-5">What is your monthly mortgage / rent payment?</h3>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyPayment"
                  id="monthlyPayment-$0 - $500"
                  defaultValue="$0 - $500"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyPayment-$0 - $500"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly mortgage / rent payment?",
                      answer: "$0 - $500",
                    })
                  }
                >
                  $0 - $500
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyPayment"
                  id="monthlyPayment-$501 - $1000"
                  defaultValue="$501 - $1000"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyPayment-$501 - $1000"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly mortgage / rent payment?",
                      answer: "$501 - $1000",
                    })
                  }
                >
                  $501 - $1000
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyPayment"
                  id="monthlyPayment-$1001 - $2000"
                  defaultValue="$1001 - $2000"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyPayment-$1001 - $2000"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly mortgage / rent payment?",
                      answer: "$1001 - $2000",
                    })
                  }
                >
                  $1001 - $2000
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="monthlyPayment"
                  id="monthlyPayment-$2001+"
                  defaultValue="$2001+"
                  className="btn-check"
                />
                <label
                  htmlFor="monthlyPayment-$2001+"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your monthly mortgage / rent payment?",
                      answer: "$2001+",
                    })
                  }
                >
                  $2001+
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MonthlyPayment;
