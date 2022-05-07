import { useState } from "react";
import { Redirect } from "react-router-dom";
import Login from "../../components/Login/Login";
import Options from "../../components/Login/Options";
import "./LoginPage.scss";

export default function LoginPage() {
  const [login, setLogin] = useState(false);
  const [userType, setUser] = useState();
  const [redirect, setRedirect] = useState(false);

  // add function call to authenticate login
  // redirect to dashboard after successful login
  const goToDashboard = (email, password) => {
    if (email && password) {
      setRedirect(true);
    } else {
      alert("Please fill in the missing details");
    }
  };

  // handle error if invalid user
  if (redirect) {
    return <Redirect to="/dashboard" from="/" />;
  }

  return (
    <main className="login">
      <h2 className="login__header">
        Welcome to your in-office booking solution!
      </h2>
      <Options setLogin={setLogin} setUser={setUser} />
      {login && <Login userType={userType} formHandler={goToDashboard} />}
    </main>
  );
}
