import React, { useState } from "react";

function DateOfBirth({ setComp }) {
  let date = [];
  for (let i = 1; i < 32; i++) {
    date.push(i);
  }

  let month = [];
  for (let i = 1; i < 13; i++) {
    month.push(i);
  }

  let year = [];
  for (let i = 1957; i < 2003; i++) {
    year.push(i);
  }

  const [Isdob, setIsdod] = useState({
    date: "",
    month: "",
    year: "",
  });
  return (
    <>
      <div data-step="dateOfBirth">
        <h3 className="mb-5">What is your date of birth?</h3>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-12 col-lg-4">
                <select
                  name="birthDay"
                  id="birthDay"
                  className="form-select form-select-empty p-3"
                  value={Isdob.date}
                  onChange={(e) => {
                    setIsdod((prev) => ({ ...prev, date: e.target.value }));
                  }}
                >
                  <option value="">DD</option>
                  {date.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback" />
              </div>
              <div className="col-12 col-lg-4">
                <select
                  name="birthMonth"
                  id="birthMonth"
                  className="form-select form-select-empty p-3"
                  value={Isdob.month}
                  onChange={(e) => {
                    setIsdod((prev) => ({ ...prev, month: e.target.value }));
                  }}
                >
                  <option value="">MM</option>
                  {month.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback" />
              </div>
              <div className="col-12 col-lg-4">
                <select
                  name="birthYear"
                  id="birthYear"
                  className="form-select form-select-empty p-3"
                  value={Isdob.year}
                  onChange={(e) => {
                    setIsdod((prev) => ({ ...prev, year: e.target.value }));
                  }}
                >
                  <option value="">YYYY</option>
                  {year.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <div className="invalid-feedback" />
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary py-3 px-5"
          onClick={() =>
            Isdob.date &&
            setComp({
              question: "What is your date of birth?",
              answer: Isdob,
            })
          }
        >
          Continue
        </button>
      </div>
    </>
  );
}

export default DateOfBirth;
