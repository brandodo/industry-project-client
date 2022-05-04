import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <HomePage />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
