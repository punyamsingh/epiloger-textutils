import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = 'slategrey'
      showAlert("we went dark", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = '#FFE3DA'
      showAlert("lighted again", "success")
    }
  }
  document.body.style.backgroundColor = mode === 'light' ? '#FFE3DA' : 'darkslategrey'

  return (
    <>
      <Router>
        <NavBar title="Epiloger" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
