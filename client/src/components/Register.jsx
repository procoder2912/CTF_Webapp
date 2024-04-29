import React, { useState } from 'react'
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
export default function Register(props) {
  const [username, setUsername] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('')
  const [uniquemsg, setuniquemsg] = useState('');
  const [validemail, setValidemail] = useState('');
  const [uservalid,setValiduser] = useState('')
  const [msg,setmsg] = useState('');
  const [namevalid,setValidname] = useState('');
  const [passworderror,setPassworderror] = useState({match:'',length:''});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username + name + email + pass);
    setUsername('')
    setPass('')
    setemail('')
    setname('')
    setConfirmpassword('');
  }
  const navigate = useNavigate();
  const emailvalid = (email)=>{
      const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if(!regex.test(email)){
        
        return true;
      }
      return false;
      
  }
  const validname = (name)=>{
    const regex = /^[A-Za-z ]+$/
    if(regex.test(name)){
      return true;
    }
    return false;
  }
 
  const register = () => {
    console.log(emailvalid(email));
    if(!username||!name||!email||!pass||!confirmpassword){
      setmsg("All fields are required");
    }
    else if(emailvalid(email)){
    
      setValidemail("Enter the correct email");
    }else if(username.length>=15){
      setValiduser("Please Enter the username less than 15 characters");
    }
    else if(!validname(name) || name.length>=50){
        setValidname("Enter valid name and characters less than 50");
    }
    else if(pass<8 && pass>20){
      setPassworderror({match:'',length:'Enter the password with more than 8 and less than 20 characters'})
    }
    else if(pass!=confirmpassword){
      setPassworderror({match:'Password Conflict',length:''})
    }
    else{
    Axios.post('http://localhost:3001/register', { email: email, username: username, name: name, pass: pass })
      .then((res) => {
      
        
        if (res.data.Status === "Success" ) {
          console.log(validemail);
          // console.log("we are a user")
          navigate('/')
        }
        else if (res.data.Error === "Unique") {
          setuniquemsg("The username already taken");
        }
      })
      .then((err) => {
        console.log(err);
      })
    }
  }


  


  return (
    <>
      <div className='main_register'>

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
                <div className="register-form">


                  <form className='register' onSubmit={handleSubmit}>

                    <div className="credentials">
                      <label htmlFor="email">Email</label>
                      <input value={email} onChange={(e) => setemail(e.target.value)} type='email' name='email' placeholder autoFocus ></input>
                      <p style={{color:'red'}}>{validemail}</p>
                    </div>
                    <div className="credentials">
                      <label htmlFor='username'>Username</label>
                      <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' name='username'></input>
                      <p style={{color:'red'}}>{uservalid}</p>
                    </div>
                    <div className="Name">
                      <label htmlFor='name'>Name</label>
                      <input value={name} type="text" name='name' onChange={(e) => setname(e.target.value)}></input>
                      <p style={{color:'red'}}>{namevalid}</p>
                    </div>

                    <div className="credentials">

                      <label htmlFor='pass'>Password</label>
                      <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' name='password' placeholder></input>
                      <p style={{color:'red'}} >{passworderror.length}</p>
                    </div>
                    <div className="credentials">

                      <label htmlFor='pass'>Confirm Password</label>
                      <input value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} type='password' name='password' placeholder></input>
                      <p style={{color:'red'}}>{passworderror.match}</p>
                    </div>
                    <div className="btn-login">
                      <p style={{ color: 'red' }}>{uniquemsg}</p>
                      <p style={{color:'red'}}>{msg}</p>
                      <button type='submit' onClick={register}>register</button>
                      
                    </div>
                    <div className="btn-login">
                        
                      <Link to='/'>
                        <button >Already have an account</button>
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
