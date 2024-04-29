import React, { useState } from 'react'
import John from '../John.zip';
import axios from 'axios';
import Popup from './Popup';
import WrongPopup from './Wrongpopup';
export default function Maximize() {
const [flag,setflag] = useState('');
const prblmname = 'Johnny';

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
    // <>
    //   <div className="content attachment" >

    //     <div className="down-box">

    //       <div>

    //         file attachments
    //       </div>
    //       <div>
    //         <a style={{ color: "white" }} href={John} download="John.zip" target="_blank" rel='noreferrer'>

    //           <span class="material-symbols-outlined">
    //             download
    //           </span>
    //         </a>
    //       </div>
    //     </div>



    //   </div>
    //   <div className='content flag'>

    //   {/* <div>
    //       <span class="material-symbols-outlined">
    //         flag
    //       </span>
    //     </div> */}
    //     <div>

    //       <input type="text" value={flag} name='flag' onChange={(e)=>setflag(e.target.value)} />
    //     </div>
    //     <div>
    //       <button onClick={getFlag}><span class="material-symbols-outlined">
    //         flag
    //       </span></button>
    //     </div>
        
    //   </div>
    // </>
    
    <div>
      <div className='question'>
      <p>The Johnny has received a mail from an anonymous email address with only a zip file attached to it the file seems to be locked.Can you find way to help <b>JOHN</b>ny to unlock the file.</p>
      </div>
      <div className="popup-window">
      
        <div className='content attachment' >

          <div className="down-box">

            <div>

              File attachments
            </div>
            <div>
              <a style={{ color: "white" }} href={John} download="John.zip" target="_blank" rel='noreferrer'>

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
