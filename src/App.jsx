import { useState } from "react";
import Form from "./Components/Form";
import StepTwo from "./Components/StepTwo";
import "./App.css";

function App() {
  const [resultForm, setResultForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      {(!resultForm || isEdit) && (
        <Form
          setResultForm={setResultForm}
          setIsEdit={setIsEdit}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          initialUsername={username}
          initialEmail={email}
          initialPassword={password}
        />
      )}
      {resultForm && !isEdit && (
        <StepTwo
          username={username}
          email={email}
          password={password}
          setIsEdit={setIsEdit}
          setResultForm={setResultForm}
        />
      )}
    </div>
  );
}

export default App;
