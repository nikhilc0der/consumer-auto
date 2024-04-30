import React from "react";

function DoneComp({ setModal }) {
  return (
    <>
      <h3 className="mb-5">Details Send</h3>
      <button
        type="submit"
        className="btn btn-primary py-3 px-5"
        onClick={() => setModal(true)}
      >
        Submit
      </button>
    </>
  );
}

export default DoneComp;
