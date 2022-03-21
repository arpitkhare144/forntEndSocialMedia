import React, { Component } from 'react'
import Login from './login'
import { Navigate } from 'react-router-dom'
export default class preferences extends Component {
  
  render() {
    if(localStorage.getItem("login")==="false")
    {
      return(<Navigate to="/login"></Navigate>)
    }
    const checkboxList = this.props.checkboxList;
    return (
      <>
        {checkboxList.map((option) => (
          <div className="form-check" key={option.id}>
            <input
            className="form-check-input"
              type="checkbox"
              name="hobbies"
              id={option.id}
              value={option.id}
              checked={option.isChecked}
              onChange={(e) => this.props.onChange(e,option)}
            />
            <h7><label className="form-check-label" htmlFor={option.id}>
              {option.name}
            </label></h7>
          </div>
        ))}
      </>
    );
  }
}
