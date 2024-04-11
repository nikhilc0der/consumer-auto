import React from "react";

function CanadaStatus({ setComp }) {
  return (
    <>
      <div data-step="canadaStatus">
        <h3 className="mb-5">What is your status in Canada</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="canadaStatus"
                  id="canadaStatus-Citizen"
                  defaultValue="Citizen"
                  className="btn-check"
                />
                <label
                  htmlFor="canadaStatus-Citizen"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your status in Canada",
                      answer: "Citizen",
                    })
                  }
                >
                  Citizen
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="canadaStatus"
                  id="canadaStatus-Student"
                  defaultValue="Student"
                  className="btn-check"
                />
                <label
                  htmlFor="canadaStatus-Student"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your status in Canada",
                      answer: "Student",
                    })
                  }
                >
                  Student
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="canadaStatus"
                  id="canadaStatus-Refugee"
                  defaultValue="Refugee"
                  className="btn-check"
                />
                <label
                  htmlFor="canadaStatus-Refugee"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your status in Canada",
                      answer: "Refugee",
                    })
                  }
                >
                  Refugee
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="canadaStatus"
                  id="canadaStatus-PR"
                  defaultValue="PR"
                  className="btn-check"
                />
                <label
                  htmlFor="canadaStatus-PR"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your status in Canada",
                      answer: "PR",
                    })
                  }
                >
                  PR
                </label>
              </div>
              <div className="col-12 col-lg-6">
                <input
                  required
                  type="radio"
                  name="canadaStatus"
                  id="canadaStatus-Work-Permit"
                  defaultValue="Work Permit"
                  className="btn-check"
                />
                <label
                  htmlFor="canadaStatus-Work-Permit"
                  className="btn btn-light rounded shadow-sm w-100 py-3"
                  onClick={() =>
                    setComp({
                      question: "What is your status in Canada",
                      answer: "Work Permit",
                    })
                  }
                >
                  Work Permit
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

export default CanadaStatus;
