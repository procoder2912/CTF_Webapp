import {React,useState} from 'react'
import axios from 'axios';
import Popup from './Popup';
import WrongPopup from './Wrongpopup';



function Loginchallenge() {
const [flag,setflag] = useState('');
const prblmname = 'login';

const [popup, setPopup] = useState(false);
const [Wrongpopup,setWrongpopup] = useState(false);

const getFlag = () =>{

  axios.post('http://localhost:3001/valid',{flag:flag,ProblemName:prblmname})
  .then((res)=>{
    console.log(res.data);
    if (res.data.flag) {
      console.log(1);
      setPopup(true);
      setflag('');
    }
    else{
        setWrongpopup(true);
        setflag('');
    }
    console.log(res);
  }).catch(err=>console.log(err));
};
  return (
    <div>
    <div className='question'>
    <p>My dog-sitter's brother made this website but I can't get in; can you help?</p>
    </div>
    <div className="popup-window">
    
      <div className='content attachment' >

        <div className="down-box">

          
          <div>
            
          <a href="https://login.mars.picoctf.net/" id='webproblem' target='_blank'>Click here</a>
           
          </div>
        </div>



      </div>
      <div className='content flag'>


        <div>

          <input type="text" value={flag} name='flag' onChange={(e) => setflag(e.target.value)} />
        </div>
        <div>
          <button onClick={getFlag}><span class="material-symbols-outlined">
            flag
          </span></button>
        </div>

      </div>
      { popup ?
      <div style={{ position: "absolute", display: "flex", justifyContent: "center", alignContent: "center" }}>
        { <Popup trigger={popup} setTrigger={setPopup} />}
      </div>
      :
      <div style={{ position: "absolute", display: "flex", justifyContent: "center", alignContent: "center" }}>
        { <WrongPopup trigger={Wrongpopup} setTrigger={setWrongpopup}/> }
      </div>
      }
    </div>
  </div> 
  )
}

export default Loginchallenge
