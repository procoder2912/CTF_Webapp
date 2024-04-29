import React from 'react'
import { Link } from 'react-router-dom'
export default function Forensics() {
  return (
   <>
           <div className="main">
            <div className="row forensic">Forensics</div>
            <div className="cardlist-containers cc-first ">
              <Link to='/home/forensic/Maximize' style={{color:"white",textDecoration:"none"}}>
              <div className="problem-card one">
                <div className="card-header">
                  <p>Forensics</p>
                  <p>200 points</p>

                </div>
                <div className="problem-name">
                  <h1>Maximize</h1>
                </div>
              </div>
              </Link>
              <Link to='/home/forensic/Magic' style={{color:"white",textDecoration:"none"}} >
              <div className="problem-card two">
                <div className="card-header">
                  <p>Forensics</p>
                  <p>200 points</p>
                </div>
                <div className="problem-name">
                  <h1>Magic</h1>
                </div>
                
              </div>
              </Link>
              <Link to='/home/forensic/Johnny' style={{color:"white",textDecoration:"none"}} >
              <div className="problem-card three">
                <div className="card-header">
                  <p>Forensics</p>
                  <p>200 points</p>
                </div>
                <div className="problem-name">
                  <h1>JOHNNY</h1>
                </div>
                
              </div>
              </Link>
              <Link to='/home/forensic/Zig' style={{color:"white",textDecoration:"none"}} >
              <div className="problem-card three">
                <div className="card-header">
                  <p>Forensics</p>
                  <p>200 points</p>
                </div>
                <div className="problem-name">
                  <h1>Zig's Misery</h1>
                </div>
                
              </div>

         </Link>
            </div>
           
            
           </div>
   </>
  )
}