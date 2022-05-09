import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Login from "../../components/Login/Login";
import Options from "../../components/Login/Options";
import axios from "axios";
import API_URL from "../../components/utils";
import logo from "../../assets/images/flex-office-logo_V01.png";
import "./LoginPage.scss";

export default function LoginPage({ setUser, setLoggedIn }) {
  const [login, setLogin] = useState(false);
  const [userType, setUserType] = useState();
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const loginTransition = useTransition(show, {
    from: { x: 0, y: -100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 300, opacity: 0 },
    config: config.slow,
  });

  const formTransition = useTransition(login, {
    from: { x: 0, y: -100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 300, opacity: 0 },
    config: config.slow,
  });

  // add function call to authenticate login
  // redirect to dashboard after successful login
  const goToDashboard = (userid, password) => {
    axios
      .post(`${API_URL}/login`, { userid, password })
      .then(({ data }) => {
        setUser(data);
        sessionStorage.setItem("userData", JSON.stringify(data));
        setLoggedIn(true);
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };

  // handle error if invalid user

  // redirect to dashboard after successful login
  if (redirect) {
    return <Redirect to="/dashboard" from="/" />;
  }

  return (
    <main className="login">
      {loginTransition(
        (styles, show) =>
          show &&
          !login && (
            <>
              <animated.div className="login__logoContainer" style={styles}>
                <img className="login__logo" src={logo} alt="logo" />
              </animated.div>
              <animated.h2 className="login__header" style={styles}>
                <span>Welcome to your</span> in-office <span>booking</span>{" "}
                solution!
              </animated.h2>
              <animated.h2 className="login__header" style={styles}>
                <span>Log-in</span>
              </animated.h2>
              <animated.div style={styles}>
                <Options
                  setLogin={setLogin}
                  setUserType={setUserType}
                  setShow={setShow}
                />
              </animated.div>
            </>
          )
      )}

      {formTransition(
        (styles, login) =>
          login && (
            <animated.div style={styles}>
              <animated.h2 className="login__header" style={styles}>
                <span>Log-in</span>
              </animated.h2>
              <Login userType={userType} formHandler={goToDashboard} />
            </animated.div>
          )
      )}
    </main>
  );
}
