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
  const [user, setUser] = useState({});

  useEffect(() => {
    if (user.userid == null) {
      setUser(JSON.parse(sessionStorage.getItem("userData")));
    }
  }, [user]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header user={user} />
        <div id="outer-container" className={user.userid ? "appContainer" : ""}>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => (
                <LoginPage setUser={setUser} {...routerProps} />
              )}
            />
            <Route
              path="/dashboard"
              render={(routerProps) => (
                <Dashboard user={user} setUser={setUser} {...routerProps} />
              )}
            />
            <Route
              path="/status"
              render={(routerProps) => (
                <StatusPage user={user} setUser={setUser} {...routerProps} />
              )}
            />
            <Route
              path="/events"
              render={(routerProps) => <EventsPage {...routerProps} />}
            />
            <Route
              path="/booking"
              render={(routerProps) => <BookingPage {...routerProps} />}
            />
          </Switch>
        </div>
        {user && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
