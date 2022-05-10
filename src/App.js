import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import StatusPage from "./pages/StatusPage/StatusPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [late, setLate] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!user || toggle) {
      setUser(JSON.parse(sessionStorage.getItem("userData")));
      setLoggedIn(true);
      setToggle(false);
    }
  }, [user, toggle]);

  return (
    <BrowserRouter>
      {/* <div className="app"> */}
        <Header user={user} loggedIn={loggedIn} />
        <div id="outer-container" className={user ? "appContainer" : ""}>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => (
                <LoginPage
                  setUser={setUser}
                  setLoggedIn={setLoggedIn}
                  setLate={setLate}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/dashboard"
              render={(routerProps) => (
                <Dashboard
                  user={user}
                  setUser={setUser}
                  late={late}
                  toggle={toggle}
                  setToggle={setToggle}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/status"
              render={(routerProps) => (
                <StatusPage
                  user={user}
                  setUser={setUser}
                  late={late}
                  setLate={setLate}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/events"
              render={(routerProps) => (
                <EventsPage user={user} {...routerProps} />
              )}
            />
            <Route
              path="/booking"
              render={(routerProps) => (
                <BookingPage user={user} {...routerProps} />
              )}
            />
          </Switch>
        </div>
        {user && <Footer />}
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
