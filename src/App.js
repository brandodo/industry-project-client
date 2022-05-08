import "./App.scss";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import StatusPage from "./pages/StatusPage/StatusPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import EventsPage from "./pages/EventsPage/EventsPage";

function App() {
  const [user, setUser] = useState("bobby");

  return (
    <BrowserRouter>
      <div className="app">
        <Header setUser={setUser} />
        <div id="outer-container" className="appContainer">
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => (
                <LoginPage user={user} {...routerProps} />
              )}
            />
            <Route
              path="/dashboard"
              render={(routerProps) => <Dashboard {...routerProps} />}
            />
            <Route
              path="/status"
              render={(routerProps) => (
                <StatusPage user={user} {...routerProps} />
              )}
            />
            <Route
              path="/events"
              render={(routerProps) => <EventsPage {...routerProps} />}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
