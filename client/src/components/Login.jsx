import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [username, setusername] = useState('');
  const [pass, setPass] = useState('');
  const [Loginstatus,setLoginstatus] = useState("");
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const login = () =>{
  Axios.post('http://localhost:3001/login',{ username:username,password:pass})
  .then((res)=>{
      if(res.data.Login)
      {
        console.log('We are in home') 
     
        navigate('/home')
      }
      else{
        setLoginstatus("No user found")
       
        
      }
      // console.log(res);
     
  }).catch(err=> console.log(err));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    setusername('');
    setPass('');
  }
  return (
    <>
   
      <div className='main'>

        <div className="container">
          <div className="row ">
            <div className="column">
              <div className='hacker_card'>
                <div className="back-hack">
                  <div className="back-hack-overlay"></div>
                  <div className="sign-in-text">
                    <h1>Hackers's World</h1>
                    <p>Sign in to get going again</p>
                  </div>
                </div>
                <div className="login-form">


                  <form className='login' onSubmit={handleSubmit}>

                    <div className="credentials">
                      <label htmlFor="username">Username</label>
                      <input value={username} onChange={(e) => setusername(e.target.value)} type='text' name='username'  autoFocus ></input>
                    </div>
                    <div className="credentials">

                      <label htmlFor='pass'>Password</label>
                      <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' name='password' ></input>
                    </div>
                    <div className="btn-login">
                      <p style={{color:'red'}}>{Loginstatus}</p>
                    <button type='submit' onClick={login}>Log In</button>
                    </div>
                    <div className="btn-login">

                    <Link to='/register'>
                      <button>Don't have an account</button>
                    </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
