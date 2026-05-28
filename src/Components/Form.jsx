import { useState } from "react";
import StepTwo from "./StepTwo";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resultForm, setResultForm] = useState(false);
  return (
    <>
      {!resultForm && (
        <div>
          <h1>Create account</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              if (password !== passwordConfirm) {
                setErrorMessage("Mot de passe différents");
              } else if (!username || !email) {
                setErrorMessage("information manquantes");
              } else {
                setResultForm(true);
              }
            }}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Sasir votre nom"
                id="name"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Sasir votre Email"
                id="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Sasir un mot de passe"
                id="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm">Confirm your password</label>
              <input
                type="password"
                placeholder="Confirmer le mot de passe"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(event) => {
                  setPasswordConfirm(event.target.value);
                }}
              />
            </div>
            <div>
              {errorMessage && <span>{errorMessage}</span>}
              <button>Register</button>
            </div>
          </form>
        </div>
      )}
      {resultForm && (
        <StepTwo username={username} email={email} password={password} />
      )}
    </>
  );
};

export default Form;
