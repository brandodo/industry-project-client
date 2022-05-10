import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Login from "../../components/Login/Login";
import Options from "../../components/Login/Options";
import axios from "axios";
import API_URL from "../../components/utils";
import moment from "moment";
import logo from "../../assets/images/flex-office-logo_V01.png";
import "./LoginPage.scss";

export default function LoginPage({ setUser, setLoggedIn, setLate }) {
  const [login, setLogin] = useState(false);
  const [userType, setUserType] = useState();
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    sessionStorage.clear();
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

  // send POST call to authenticate user and handle response
  // success -> redirect to dashboard
  // fail -> alert user of incorrect email / password
  const goToDashboard = (email, password) => {
    axios
      .post(`${API_URL}/login`, { email, password })
      .then(({ data }) => {
        setUser(data);
        sessionStorage.setItem("userData", JSON.stringify(data));
        setLoggedIn(true);
        setRedirect(true);

        // check if user needs to update their status
        const date = data.userInfo[0].date;
        const lastDay = moment(date, "YYYY-MMM-DD");
        const today = moment().startOf("day");
        const days = Math.round(moment.duration(today - lastDay).asDays());
        days > 3 ? setLate(true) : setLate(false);
      })
      .catch((err) => {
        return alert(err.response.data);
      });
  };

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
