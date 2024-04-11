import React from "react";
import VehicleType from "./VehicleType";
import MonthlyBudget from "./MonthlyBudget";
import CurrentlyDriving from "./CurrentlyDriving";
import EmploymentStatus from "./EmploymentStatus";
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
import CompleteForm from "./CompleteForm";
import CanadaStatus from "./CanadaStatus";

function Controller({ isComp, setComp }) {
  switch (isComp) {
    case "VehicleType":
      return <VehicleType setComp={setComp} />;
    case "MonthlyBudget":
      return <MonthlyBudget setComp={setComp} />;
    case "CurrentlyDriving":
      return <CurrentlyDriving setComp={setComp} />;
    case "CanadaStatus":
      return <CanadaStatus setComp={setComp} />;
    case "EmploymentStatus":
      return <EmploymentStatus setComp={setComp} />;
    case "MonthlyIncome":
      return <MonthlyIncome setComp={setComp} />;
    case "IncomeLength":
      return <IncomeLength setComp={setComp} />;
    case "WhereYouWork":
      return <WhereYouWork setComp={setComp} />;
    case "JobTitle":
      return <JobTitle setComp={setComp} />;
    case "Address":
      return <Address setComp={setComp} />;
    case "RentOrOwn":
      return <RentOrOwn setComp={setComp} />;
    case "MonthlyPayment":
      return <MonthlyPayment setComp={setComp} />;
    case "AddressLength":
      return <AddressLength setComp={setComp} />;
    case "DateOfBirth":
      return <DateOfBirth setComp={setComp} />;
    case "GetInTouch":
      return <GetInTouch setComp={setComp} />;
    case "Complete":
      return <CompleteForm />;
    default:
      return null;
  }
}

export default Controller;
