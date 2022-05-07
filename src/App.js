import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const [user, setUser] = useState("bobby");

  return (
    <BrowserRouter>
      <div id="outer-container">
        <Header setUser={setUser} />
        <Switch>
          <Route path="/" exact render={() => <LoginPage user={user} />} />
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/about" render={() => <AboutPage user={user} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
