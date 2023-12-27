import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState}from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light")
  const[alert,setAlert]=useState("null")

  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(()=>{
     setAlert(null)
   },1500)
  }

  const toggleMode=()=>{
    if(mode==="dark")
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
      document.title="TextUtilis-Light Mode"
      // setInterval(()=>{
      //   document.title='TextUtilis is amazing Mode';
      // },2000)
      // setInterval(()=>{
      //   document.title='Install TextUtilis Now';
      // },1500)
     }
  
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtilis-Dark Mode"
    }
  }
  
  return (
    <>
    {/* FOR THE ROUTER TO WORK AND CHANGE PAGE WITHOUT RELOADING WE HAVE TO ADD LINK AND TO IN THE NAVBAR a LINKS */}
   <Router>
   <Navbar title="textutilis2" about="about us" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   
   <Routes>  
  <Route exact path="/about" element={<About mode={mode}/>}>
  </Route>
  <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
  </Route>
  </Routes>        
  </div>
   {/* <About/> */}
   <Alert alert={alert}/>
  </Router>
    </>
   );
}

export default App;
