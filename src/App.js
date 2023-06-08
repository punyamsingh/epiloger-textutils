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
      document.body.style.backgroundColor = '#2f4f4f'
      showAlert("we went dark", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = '#8ad1c9'
      showAlert("lighted again", "success")
    }
  }
  document.body.style.backgroundColor = mode === 'light' ? '#8ad1c9' : '#2f4f4f'

  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
        <footer style={{background:"#000", padding:"30px 0px", textAlign:"center"}}>
          <p>Author: Epiloger</p>
          <p><a href="https://github.com/punyamsingh/epiloger-textutils">Repo Link</a></p>
        </footer>
      </Router>
    </>
  );
}

export default App;
