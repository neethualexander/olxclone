import React ,{useState,useContext,useEffect}from 'react';
import {FirebaseContext} from '../../store/firebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory}from'react-router-dom'

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const{firebase}=useContext(FirebaseContext)
  const history=useHistory()
  const back=useHistory()

  const handleLogin=(e)=>{
    e.preventDefault()
    setEmailError('');
    setPasswordError('');
    
    if (!email) {
      setEmailError('Email is required.');
    } else if (email){
      const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regEx.test(email)){
      setEmailError('valid email format.');
    }
    else {
      setEmailError('invalid email format.');
    }}
    
    if (!password) {
      setPasswordError('Password is required.');
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long.');
    }

    if (!emailError && !passwordError) {
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     history.push('/')
    }).catch((error)=>{
      alert(error.maeesage)
    })
}}
useEffect(() => {
  
    back.push('/login');

}, [back]);


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
         
         {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
           {passwordError &&<p style={{color:'red'}}>{passwordError}</p>}
          <br />
          <br />
      <button type="Submit">Login</button>
        </form>
        <a onClick={()=>{history.push('/Signup')}}>Signup</a>
      </div>
    </div>
  );
}


export default Login;
