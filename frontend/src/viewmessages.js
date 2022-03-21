import React, { Component } from 'react'
import Profile from './profile'
import DynamicTable from './dynamictable'
import Login from './login'
import { Navigate } from 'react-router-dom'
export default function  viewmessages (probs) {
    if(localStorage.getItem("login")==="false")
    {
      return(<Navigate to="/login"></Navigate>)
    }
    return (
      <>
      <Profile></Profile>
      
        <DynamicTable></DynamicTable>

      
      </>
    )
  
}
