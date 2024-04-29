import React from 'react'
import Wrong from '../Wrong.png'

function Wrongpopup(props) {
    return ( props.trigger &&
        <div className='popup'>
            <div className="popup-inner wrong">
                <button onClick={()=>props.setTrigger(false)} className='close-btn'>X</button>
                {props.children}
                <div className='popup-box'><img src={Wrong} alt="Wrong" /></div>
                Flag is not Correct
            </div>

        </div>
        
    )
}

export default Wrongpopup
