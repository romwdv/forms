import "./App.css";
import Form from "./Components/Form";
import StepTwo from "./Components/StepTwo";
import { useState } from "react";

function App({ show, username, email, password }) {
  const [resultForm, setResultForm] = useState(show);
  console.log(username);
  return (
    <div className="container">
      {!resultForm && <Form />}
      {resultForm && (
        <StepTwo username={username} email={email} password={password} />
      )}
    </div>
  );
}

export default App;
