import React, { useState } from "react";
import CreditComp from "./CreditComp";
import VehicleType from "./VehicleType";
import MonthlyBudget from "./MonthlyBudget";
import CurrentlyDriving from "./CurrentlyDriving";
import EmploymentStatus from "./EmploymentStatus";
import CanadaStatus from "./CanadaStatus";
import MonthlyIncome from "./MonthlyIncome";
import IncomeLength from "./IncomeLength";
import WhereYouWork from "./WhereYouWork";
import JobTitle from "./JobTitle";
import Address from "./Address";
import RentOrOwn from "./RentOrOwn";
import MonthlyPayment from "./MonthlyPayment";
import AddressLength from "./AddressLength";
import DateOfBirth from "./DateOfBirth";
import GetInTouch from "./GetInTouch";
import DoneComp from "./DoneComp";

function MainComp() {
  const [DataArray, setDataArray] = useState([]);
  function handleClick(id) {
    setDataArray((prev) =>
      prev.concat({ question: id.question, answer: id.answer })
    );
  }
  const comp1 = {
    index: 0,
    func: <VehicleType setComp={handleClick} />,
  };
  const comp2 = {
    index: 1,
    func: <MonthlyBudget setComp={handleClick} />,
  };
  const comp3 = {
    index: 2,
    func: <CurrentlyDriving setComp={handleClick} />,
  };
  const comp4 = {
    index: 3,
    func: <CanadaStatus setComp={handleClick} />,
  };
  const comp5 = {
    index: 4,
    func: <EmploymentStatus setComp={handleClick} />,
  };
  const comp6 = {
    index: 5,
    func: <MonthlyIncome setComp={handleClick} />,
  };
  const comp7 = {
    index: 6,
    func: <IncomeLength setComp={handleClick} />,
  };
  const comp8 = {
    index: 7,
    func: <WhereYouWork setComp={handleClick} />,
  };
  const comp9 = {
    index: 8,
    func: <JobTitle setComp={handleClick} />,
  };
  const comp10 = {
    index: 9,
    func: <Address setComp={handleClick} />,
  };
  const comp11 = {
    index: 10,
    func: <RentOrOwn setComp={handleClick} />,
  };
  const comp12 = {
    index: 11,
    func: <MonthlyPayment setComp={handleClick} />,
  };
  const comp13 = {
    index: 12,
    func: <AddressLength setComp={handleClick} />,
  };
  const comp14 = {
    index: 13,
    func: <DateOfBirth setComp={handleClick} />,
  };
  const comp15 = {
    index: 14,
    func: <GetInTouch setComp={handleClick} />,
  };
  const comp16 = {
    index: 15,
    func: <DoneComp />,
  };

  const components = [
    comp1,
    comp2,
    comp3,
    comp4,
    comp5,
    comp6,
    comp7,
    comp8,
    comp9,
    comp10,
    comp11,
    comp12,
    comp13,
    comp14,
    comp15,
    comp16,
  ];

  function returnCurrentComp() {
    if (DataArray.length < 16) {
      return components[DataArray.length].func;
    } else {
      return (
        <div>
          <h1>Data complete</h1>
        </div>
      );
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/detailsend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ DataArray }),
      });
      const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form
        className="container text-center pt-3 pb-5 mb-5"
        onSubmit={handleFormSubmit}
      >
        <h1 className="display-3 fw-bold">Get a Car Loan Fast</h1>
        <h5 className="pb-3 mb-5">We say YES to any credit rating</h5>
        <div className="mb-5" />
        <>{returnCurrentComp()}</>
        <CreditComp />
      </form>
    </>
  );
}

export default MainComp;
