import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';


function App() {
  const [alert, setalert] = useState(null)

  // function to show alert message.
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (
    <>
      <NoteState>
        <BrowserRouter basename='/iNotebook'>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/iNotebook" element={<Home showalert = {showalert} />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/Login" element={<Login showalert = {showalert} />}></Route>
              <Route exact path="/Signup" element={<Signup showalert = {showalert} />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>

  );
}

export default App;
