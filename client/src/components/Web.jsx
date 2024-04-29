import React from 'react'
import { Link } from 'react-router-dom'
// import loginchallenge from './loginchallenge'
function Web() {
  return (

           <div className="main">
            <div className="row webp">Web</div>
            <div className="cardlist-containers cc-first ">
              <Link to='/home/Web/login' style={{color:"white",textDecoration:"none"}}>
              <div className="problem-card one">
                <div className="card-header">
                  <p>Web</p>
                  <p>300 points</p>

                </div>
                <div className="problem-name">
                  <h1>login</h1>
                </div>
              </div>
              </Link>
              <Link to='/home/Web/forbidden' style={{color:"white",textDecoration:"none"}} >
              <div className="problem-card two">
                <div className="card-header">
                  <p>Web</p>
                  <p>300 points</p>
                </div>
                <div className="problem-name">
                  <h1>Forbidden </h1>
                </div>
                
              </div>
              </Link>
              <Link to='/home/web/inspect' style={{color:"white",textDecoration:"none"}} >
              <div className="problem-card three">
                <div className="card-header">
                  <p>Web</p>
                  <p>300 points</p>
                </div>
                <div className="problem-name">
                  <h1>Inspect</h1>
                </div>
                
              </div>
              </Link>
              <Link to='/home/web/authority' style={{color:"white",textDecoration:"none"}} >
              <div className="problem-card three">
                <div className="card-header">
                  <p>Web</p>
                  <p>300 points</p>
                </div>
                <div className="problem-name">
                  <h1>Authority</h1>
                </div>
                
              </div>

         </Link>
            </div>
            <div className="cardlist-containers cc-second">
            <Link to='/home/web/filter' style={{color:"white",textDecoration:"none"}}>
              <div className="problem-card one">
                <div className="card-header">
                  <p>Web</p>
                  <p>300 points</p>

                </div>
                <div className="problem-name">
                  <h1>Filter</h1>
                </div>
              </div>
            </Link>
              

            </div>
            
           </div>
   
  )
}

export default Web
