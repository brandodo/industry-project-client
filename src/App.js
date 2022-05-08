import "./App.scss";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import StatusPage from "./pages/StatusPage/StatusPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import Footer from "./components/Footer/Footer";

function App() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState();
  const [date, setDate] = useState();

  return (
    <BrowserRouter>
      <div className="app">
        <Header user={user} />
        <div id="outer-container" className={user ? "appContainer" : ""}>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => (
                <LoginPage
                  setUser={setUser}
                  setStatus={setStatus}
                  setDate={setDate}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/dashboard"
              render={(routerProps) => (
                <Dashboard
                  user={user}
                  status={status}
                  date={date}
                  {...routerProps}
                />
              )}
            />
            <Route
              path="/status"
              render={(routerProps) => (
                <StatusPage
                  user={user}
                  status={status}
                  date={date}
                  {...routerProps}
                />
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
