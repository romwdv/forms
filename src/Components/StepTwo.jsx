const StepTwo = ({ username, email, password, setIsEdit, setResultForm }) => {
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
            setIsEdit(true);
            setResultForm(false);
          }}
        >
          Editer vos infos
        </button>
      </div>
    </>
  );
};

export default StepTwo;
