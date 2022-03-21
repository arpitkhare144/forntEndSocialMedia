import React, { Component } from 'react'
import './profile.css'
import Login from './login'
import { Navigate } from 'react-router-dom'
export default function  profile(probs) {
  if(localStorage.getItem("login")==="false")
  {
    return(<Navigate to="/login"></Navigate>)
  }
    return (
        <div >
            
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        
        <div className="sidebar">
        {/* <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a> */}
        <a href="http://localhost:3000/editpreferences"><i className="fa fa-fw fa-wrench"></i> Edit Preferences</a>
        <a href="#clients"><i class="fa fa-fw fa-user"></i> Edit Details</a>
        {/* <a href="#clients"><i class="fa fa-fw fa-user"></i> View Messages</a> */}
        <a href="http://localhost:3000/viewmessages"><i className="fa fa-fw fa-envelope"></i> View Messages</a>
        </div>
        </div>
    )
  }

