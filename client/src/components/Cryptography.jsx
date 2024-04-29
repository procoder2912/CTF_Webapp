import React from 'react'
import {Link} from 'react-router-dom' 
function Cryptography() {
  return (
    <>
           <div className="main">
            <div className="row forensic">Forensics</div>
            <div className="cardlist-containers cc-first ">
              <Link to='/home/crypto/mod' style={{color:"white",textDecoration:"none"}}>
              <div className="problem-card one">
                <div className="card-header">
                  <p>Crypto</p>
                  <p>200 points</p>

                </div>
                <div className="problem-name">
                  <h1>MOD</h1>
                </div>
              </div>
              </Link>
              

            </div>
            
           </div>
   </>
  )
}

export default Cryptography
