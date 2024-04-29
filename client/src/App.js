// import logo from './logo.svg';
// import { useState } from 'react';

import Login from './components/Login';
// import Register from './components/Register';
import Home from './components/Home';
import './App.css';
import Register from './components/Register';
import Maximize from './components/Maximize';
import Magic from './components/Magic'
import Zig from './components/Zig'
import Profile from './components/Profile'
import ProtectedRoutes from './components/ProtectedRoutes'
import Navbar from './components/Navbar'

import Learn from './components/Learn';
import CTF from './components/CTF';
import Web from './components/Web';
import Forbidden from './components/Forbidden';
import MOD from './components/MOD';
// import './new.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";
import Forensics from './components/Forensics';
import Johny from './components/Johnny'
import Loginchallenge from './components/loginchallenge';
import Inspect from './components/Inspect';
import Authority from './components/Authority';
import Filter from './components/Filter';
import Cryptography from './components/Cryptography';
function App() {
  // const [curr,setCurr] = useState('Login');
  // const toggleform = (formName)=>{
  //   setCurr(formName);
  // }

  return (
    <>
    <Router>
    <div className="App">
      {/* {curr==='Login'?<Login toggleform={toggleform}/>:<Register toggleform={toggleform}/>}
       */}
       {/* <Login/> */}
        <Routes>
          <Route element={<ProtectedRoutes/>}>
            {/* <Route element={<Navbar/>} path='/'></Route> */}
            <Route  element={<><Navbar/><Home/></>} path='/home'/>

            <Route element={<><Navbar/><Forensics/></>} path='/home/forensic' />
            <Route element={<Maximize/>}path='/home/forensic/Maximize' />
            <Route element={<Magic/>}path='/home/forensic/Magic' />
            <Route element={<Johny/>}path='/home/forensic/Johnny' />
            <Route element={<Zig/>}path='/home/forensic/Zig' />
            <Route element={<Loginchallenge/>} path='/home/Web/login'></Route>
            <Route element={<><Navbar/><Profile/></>} path='/home/profile' />
            <Route element={<><Navbar/><Learn/></>} path='/home/learn'> </Route>
            <Route element={<CTF/>} path='/home/CTF'></Route>
            <Route element={<><Navbar/><Web/></>} path='/home/Web'></Route>
            <Route element={<Forbidden/>} path='/home/web/forbidden'></Route>
            <Route element={<Inspect/>} path='/home/web/inspect'></Route>
            <Route element={<Authority/>} path='/home/web/authority'></Route>
            <Route element={<Filter/>} path='/home/web/filter'></Route>
            <Route element={<Cryptography/>} path='/home/crypto'></Route>
            <Route element={<MOD/>} path='/home/crypto/mod'></Route>
          </Route>
        
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>


        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
