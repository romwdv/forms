import { useState } from "react";

const Form = ({
  setResultForm,
  setIsEdit,
  setUsername,
  setEmail,
  setPassword,
  initialUsername,
  initialEmail,
  initialPassword,
}) => {
  const [localUsername, setLocalUsername] = useState(initialUsername || "");
  const [localEmail, setLocalEmail] = useState(initialEmail || "");
  const [localPassword, setLocalPassword] = useState(initialPassword || "");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <div>
        <h1>Create account</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (localPassword !== passwordConfirm) {
              setErrorMessage("Mot de passe différents");
            } else if (!localUsername || !localEmail) {
              setErrorMessage("Informations manquantes");
            } else {
              setUsername(localUsername);
              setEmail(localEmail);
              setPassword(localPassword);
              setIsEdit(false);
              setResultForm(true);
              setErrorMessage("");
            }
          }}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Saisir votre nom"
              id="name"
              value={localUsername}
              onChange={(e) => setLocalUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Saisir votre Email"
              id="email"
              value={localEmail}
              onChange={(e) => setLocalEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Saisir un mot de passe"
              id="password"
              value={localPassword}
              onChange={(e) => setLocalPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirm your password</label>
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div>
            {errorMessage && <span>{errorMessage}</span>}
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
