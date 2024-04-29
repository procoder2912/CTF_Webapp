import React, { useState } from 'react'
import bulb from '../bulbswithflag.png';
import axios from 'axios';
import Popup from './Popup';
import WrongPopup from './Wrongpopup';
export default function Maximize() {
  const [flag, setflag] = useState('');
  const prblmname = 'Maximize';
  const [popup, setPopup] = useState(false);
  const [Wrongpopup,setWrongpopup] = useState(false);

  const getFlag = () => {
    
    axios.post('http://localhost:3001/valid', { flag: flag, ProblemName: prblmname })
      .then((res) => {
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
      }).catch(err => console.log(err));
  };





  return (
    <div>
      <div className='question'>
      <p>The severe hack attack has happened on one of top MNC 
        commpany seems to be a DDOS attack and the hacker has locked all the files.
        He has been asking for ransom but our forensic team was able to reterieve the image from pc and 
        seems like hacker has hidden a key to all encrypted files.Use your stegnography skills to get the key</p>
      </div>
      <div className="popup-window">
      
        <div className='content attachment' >

          <div className="down-box">

            <div>

              File attachments
            </div>
            <div>
              <a style={{ color: "white" }} href={bulb} download="bubbles.png" target="_blank" rel='noreferrer'>

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
