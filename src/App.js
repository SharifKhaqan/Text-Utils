import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      //document.title = 'Textutils - Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      //document.title = 'Textutils - Light mode';
    }
  };

  return (
    <>
     <Router>
      <Navbar title="Textutils" about="About Textutils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route path="/" element={<TextForm heading="Try TextUtils -Word Counter,Character Counter,Remove extra Spaces" mode={mode} showAlert={showAlert} />}/>
        <Route path="/about" element={<About mode={mode}/>}/> 
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
