import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Login from "../../components/Login/Login";
import Options from "../../components/Login/Options";
import "./LoginPage.scss";

export default function LoginPage() {
  const [login, setLogin] = useState(false);
  const [userType, setUser] = useState();
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const loginTransition = useTransition(show, {
    from: { x: 0, y: -100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 300, opacity: 0 },
    config: config.stiff,
  });

  const formTransition = useTransition(login, {
    from: { x: 0, y: -100, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 300, opacity: 0 },
    config: config.slow,
  });

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
      {loginTransition(
        (styles, show) =>
          show && (
            <>
              {!login && (
                <animated.h2 className="login__header" style={styles}>
                  <span>Welcome to your</span> in-office <span>booking</span>
                  solution!
                </animated.h2>
              )}
              <animated.h2 className="login__header" style={styles}>
                <span>Log-in</span>
              </animated.h2>
              {!login && (
                <animated.div style={styles}>
                  <Options
                    setLogin={setLogin}
                    setUser={setUser}
                    setShow={setShow}
                  />
                </animated.div>
              )}
            </>
          )
      )}

      {formTransition(
        (styles, login) =>
          login && (
            <animated.div style={styles}>
              <Login userType={userType} formHandler={goToDashboard} />
            </animated.div>
          )
      )}
    </main>
  );
}
