import React, { Component } from 'react'
import Preferences from './preferences'
import Profile from './profile'
import Login from './login'
import { Navigate } from 'react-router-dom'
export default class editpreferences extends Component {
    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
          checkboxList: [
            {
              id:'1',
              name:'meeting',
              isChecked:true
            },{
              id:'2',
              name:'birthday',
              isChecked:false
            },{
              id:'3',
              name:'sports',
              isChecked:false
            },{
              id:'4',
              name:'holi',
              isChecked:false
            },{
              id:'5',
              name:'diwali',
              isChecked:false
            },
            {
                id:'6',
                name:'placements',
                isChecked:true
              },
            {
              id:'7',
              name:'urgent',
              isChecked:true
            },
            {
                id:'8',
                name:'webinar',
                isChecked:false
            },
            {
                id:'9',
                name:'workshop',
                isChecked:false
            },
            {
                id:'10',
                name:'event',
                isChecked:false
            },
            
          ],
        };
      }
    
    //   componentDidMount() {
    //     // Example of fetching response from API // Not used in example
    //      fetch("https://jsonplaceholder.typicode.com/fruits")
    //       .then((response) => response.json())
    //       .then((users) => this.setState({ checkboxList: fruits }));
    //   }
    
      onChange = (event) => {
        console.log(event);
        this.setState({ selectedValue: event.target.value });
      };
    
      handleOnChange(event,option) {
        console.log(event.target.checked);
        let checkboxList = this.state.checkboxList;
        checkboxList.forEach(chkItem=>{
          if(chkItem === option){
            chkItem.isChecked = event.target.checked;
          }
        })
        this.setState({
          checkboxList: checkboxList
        });
      }
    
      handleOnSubmit(){
        console.table(this.state.checkboxList);
      }
    
      render() {
        if(localStorage.getItem("login")==="false")
        {
          return(<Navigate to="/login"></Navigate>)
        }
        return (
           <>
           <Profile></Profile>
          <div className="App container">
            <div>
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <h3>Preferences List</h3>
                  <div className="form-row">
                    <div className="form-group col-md-20">
                      <label><h5>Select categories whose messages to be displayed:</h5></label>
                      <Preferences 
                      checkboxList={this.state.checkboxList}  
                      onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <br></br>
                  <button  className="btn btn-primary" onClick={()=>this.handleOnSubmit()}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          </>
        );
      }
}
