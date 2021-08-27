import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  const [alert, setAlert] = useState(null);
  const handleShowAlert = (message, type) => {
    setAlert({
      msg: message,
      ty: type,
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const [theme, setTheme] = useState("light");
  const handleChangeTheme = (theme) => {
    setTheme(theme);
    document.body.className = `cstm-bg-${theme}`;
    handleShowAlert(`${theme} mode has been enabled`, "success");
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        about="About us"
        theme={theme}
        changeTheme={handleChangeTheme}
      />
      <Alert alert={alert} />
      <div className={`container my-3 cstm-bg-${theme}`}>

        <Switch>
          <Route exact path="/">
            <Textform
              heading="Enter the text to analyze"
              theme={theme}
              showAlert={handleShowAlert}
            />
          </Route>

          <Route exact path="/about">
            <About theme={theme} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
