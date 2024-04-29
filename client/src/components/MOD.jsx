import {React,useState} from 'react'
import axios from 'axios';
import Popup from './Popup';
import WrongPopup from './Wrongpopup';
import mod from '../MOD.txt'

function MOD() {
const [flag,setflag] = useState('');
const prblmname = "MOD";
const [popup, setPopup] = useState(false);
const [Wrongpopup,setWrongpopup] = useState(false);
const getFlag = () =>{

    axios.post('http://localhost:3001/valid',{flag:flag,ProblemName:prblmname})
    .then((res)=>{
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
    <p>Candice is trying to decode a message sent by her brother in the time of war.But she is 
        not able to decode it can you help her decode it
    </p>
    </div>
    <div className="popup-window">
    
      <div className='content attachment' >

        <div className="down-box">

          <div>

            File attachments
          </div>
          <div>
            <a style={{ color: "white" }} href={mod} download="MOD.txt" target="_blank" rel='noreferrer'>

              <span class="material-symbols-outlined">
                download
              </span>
            </a>
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

export default MOD
