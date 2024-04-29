import {React,useState} from 'react'
import axios from 'axios';
import Popup from './Popup';
import WrongPopup from './Wrongpopup';


function Forbidden() {
    const [flag,setflag] = useState('');
    const prblmname = 'Forbidden Paths';
    
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
    <p>Can you get the flag? Here's the <a href="http://saturn.picoctf.net:58179/" target='_blank'>website</a>.
    We know that the website files live in /usr/share/nginx/html/ and the flag is at /flag.txt but the website is filtering absolute file paths. Can you get past the filter to read the flag?</p>
    </div>
    <div className="popup-window">
    
      
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

export default Forbidden
