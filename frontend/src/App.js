// import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import Login from './login';
import Header from './header';
import Register from './register';
import Preferences from './preferences';
import PreferencesMain from './preferencesmain';
import ViewMessages from './viewmessages';
import Profile from './profile';
import EditPreferences from './editpreferences';
function App() {
  return (
    <>
    
    {/* <Login></Login> */}
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<><Header></Header></>} />
        <Route exact path="/login" element={<><Header></Header><Login></Login></>} />
        <Route exact path="/register" element={<><Header></Header><Register></Register></>} />
        <Route exact path="/preferences" element={<><Header></Header><PreferencesMain></PreferencesMain></>} />
        <Route exact path="/editpreferences" element={<><Header></Header><EditPreferences></EditPreferences></>} />
        <Route exact path="/profile" element={<><Header></Header><Profile></Profile></>} />
        <Route exact path="/viewmessages" element={<><Header></Header><ViewMessages></ViewMessages></>} />
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
