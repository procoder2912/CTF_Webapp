import React, { useEffect, useState } from 'react'
import bash from '../bash.jpg'
import XSS from '../XSS.jpg'
import Nasm from '../nasm.jpg'
import Network from '../network.png'
import LFI from '../lfi.jpg'
import injection from '../sql.png'
import Map from '../map.jpg'
import Axios from 'axios'


function Learn() {
  Axios.defaults.withCredentials = true;
  const arr = ["Introduction to Bash Scripting", "Cross-site Scripting", "Introduction to Assembly Language", "Introduction to Traffic Analysis", "Local File Inclusion", "SQL Injection", "Introduction to SQL Map"]
  const [count, setCount] = useState({ bash: 0, xss: 0, asm: 0, traffic: 0, lfi: 0, sqlinject: 0, map: 0 });
  const [status, SetStatus] = useState({ bashstatus: 0, xssstatus: 0, asmstatus: 0, trafficstatus: 0, lfistatus: 0, sqlinjectstatus: 0, mapstatus: 0 });
  const enroll = (course_name) => {
    Axios.post('http://localhost:3001/enrolled', { coursename: course_name })
      .then((res) => {
        if (res.data.course) {
          console.log("enrolled");
        }
        else {
          console.log("Not enrolled");
        }
      })
  }
  const fetchcount = async () => {
    try {

      const res = await Axios.get('http://localhost:3001/countenrolled');
      setCount({ bash: res.data.bash, xss: res.data.xss, asm: res.data.asm, traffic: res.data.traffic, lfi: res.data.lfi, sqlinject: res.data.sqlinject, map: res.data.map })
      SetStatus({ bashstatus: res.data.bashstatus, xssstatus: res.data.xssstatus, asmstatus: res.data.asmstatus, trafficstatus: res.data.trafficstatus, lfistatus: res.data.lfistatus, sqlinjectstatus: res.data.sqlinjectstatus, mapstatus: res.data.mapstatus });
      // console.log(status.xssstatus);
    }
    catch (err) {
      throw err;
    }
  }


    useEffect(()=>{
        setInterval(fetchcount,500)

    },[]);
  
  
  return (
    <div className='Courses'>
      <div className="modules-row">
        <div className='module'>
          <div className="bash">
            <img src={bash} alt="bash" />
            <div className='module-content'>
              {arr[0]}
              {status.bashstatus ?
                <div className="enrolled">
                  <p>Enrolled</p>
                </div>
                :
                <div className='enroll'><button onClick={() => enroll(arr[0])}>enroll</button></div>
              }


              <div>Peoples enrolled:{count.bash}</div>
            </div>

          </div>
        </div>
        <div className='module'>
          <div className="bash">
            <img src={XSS} alt="bash" />
            <div className='module-content'>
              {arr[1]}
              {status.xssstatus ?
                <div className="enrolled">
                  <p>Enrolled</p>
                </div>
                :
                <div className='enroll'><button onClick={() => enroll(arr[1])}>enroll</button></div>
              }
              <div>Peoples enrolled:{count.xss}</div>
            </div>

          </div>
        </div>
        <div className='module'>
          <div className="bash">
            <img src={Nasm} alt="bash" />
            <div className='module-content'>
              {arr[2]}
              {status.asmstatus ?
                <div className="enrolled">
                  <p>Enrolled</p>
                </div>
                :
                <div className='enroll'><button onClick={() => enroll(arr[2])}>enroll</button></div>
              }
              <div>Peoples enrolled:{count.asm}</div>
            </div>

          </div>
        </div>
        <div className='module'>
          <div className="bash">
            <img src={Network} alt="bash" />
            <div className='module-content'>
              {arr[3]}
             
              {status.trafficstatus ?
                <div className="enrolled">
                  <p>Enrolled</p>
                </div>
                :
                <div className='enroll'><button onClick={() => enroll(arr[3])}>enroll</button></div>
              }
              
              <div>Peoples enrolled:{count.traffic}</div>
            </div>

          </div>
        </div>
        <div className='module'>
          <div className="bash">
            <img src={LFI} alt="bash" />
            <div className='module-content'>
              {arr[4]}
              {status.lfistatus ?
                <div className="enrolled">
                  <p>Enrolled</p>
                </div>
                :
                <div className='enroll'><button onClick={() => enroll(arr[4])}>enroll</button></div>
              }
              <div>Peoples enrolled:{count.lfi}</div>
            </div>

          </div>
        </div>
        <div className='module'>
          <div className="bash">
            <img src={injection} alt="bash" />
            <div className='module-content'>
              {arr[5]}
              {status.sqlinjectstatus ?
                <div className="enrolled">
                  <p>Enrolled</p>
                </div>
                :
                <div className='enroll'><button onClick={() => enroll(arr[5])}>enroll</button></div>
              }
              <div>Peoples enrolled:{count.sqlinject}</div>
            </div>

          </div>
        </div>
        <div className='module'>
          <div className="bash">
            <img src={Map} alt="bash" />
            <div className='module-content'>
              {arr[6]}
              {status.mapstatus ?
                <div className="enrolled">
                  <p>Enrolled</p>
                </div>
                :
                <div className='enroll'><button onClick={() => enroll(arr[6])}>enroll</button></div>
              }
              <div>Peoples enrolled:{count.map}</div>
            </div>

          </div>
        </div>


      </div>

    </div>

  )
}

export default Learn
