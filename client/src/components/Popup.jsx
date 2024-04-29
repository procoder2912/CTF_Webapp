import React from 'react'
// import Wrong from '../Wrong.png'
import Correct from '../Correct.png'
function Popup(props) {
  return( props.trigger &&
    

    <div className='popup'>
    <div className="popup-inner correct">
        <button className='close-btn'  onClick={()=>props.setTrigger(false) }>X</button>
        {props.children}
        <div className='popup-box'><img src={Correct} alt="Correct" /></div>
        Flag is Correct
    </div>
  
  </div>
  


)
}

export default Popup
