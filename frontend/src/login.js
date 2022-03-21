import React,{useState} from 'react' 
import { Navigate } from 'react-router-dom';
export default function Login() {

  const[flag,setFlag]=useState('false');
  localStorage.setItem('login',flag);
  const [email, setEmail]= useState('arpit@gmail.com');
  const [password, setPassword]= useState('Enter password');
  const handleOnChangeEmail= (event) =>{
    console.log("on Change was clicked email");
    setEmail(event.target.value);
    
  }
  const handleOnChangePassword= (event) =>{
    console.log("on Change was clicked password");
    setPassword(event.target.value);
    
  }
  const handleOnChangeLogin=(event)=>{
    if(password==='arpit' && email==='arpit@gmail.com' )
    {
      localStorage.setItem('email', email);
      localStorage.setItem('password',password);
      localStorage.setItem('login',flag);
      setFlag('true');
    }
    // if(flag==='true')
    // {
      event.preventDefault();
      console.log('login was clicked');
      // return(<Navigate to="/profile"></Navigate>)
      // console.log('navigfate');
    // }
  }
  if(flag==='true')
  {
    return(<Navigate to="/profile"></Navigate>);
  }
  return (
    
    <div>
      
      <div className="w-100 p-3 d-flex justify-content-center  my-5">
      <form onSubmit={handleOnChangeLogin}>
  <div className="mb-3" >
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  value={email} onChange={handleOnChangeEmail} placeholderaria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handleOnChangePassword}/>
  </div>
  <div className="mb-3">
      <p>Don't have an account ?</p>
  <a href="http://localhost:3000/register" className="text-decoration-none">Register</a>
  </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
    </div>
  )
}
