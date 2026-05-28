// import { useState } from "react";
import Form from "./Form";

const StepTwo = ({ username, email, password }) => {
  //   const [resultForm, setResultForm] = useState(true);
  return (
    <>
      <h1>Results</h1>
      <div className="results">
        <div>
          <span>Name: {username}</span>
          <span>Email: {email}</span>
          <span>Password: {password}</span>
        </div>
        <button
          onClick={() => {
            <Form editForm="true" />;
          }}
        >
          Editer vos infos
        </button>
      </div>
    </>
  );
};

export default StepTwo;
