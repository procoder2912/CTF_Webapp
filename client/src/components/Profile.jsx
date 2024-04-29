import React, { useEffect, useState } from 'react'
import hack from '../hacktheworld.avif'
import axios from 'axios'
export default function Profile() {
  const [username, setName] = useState('');
  const [forensic, setForensic] = useState({ Forensic: 0, Tforensic: 0 });
  const [web, setWeb] = useState({ Web: 0, Tweb: 0 })
  const [crypt, setCrypt] = useState({ crypt: 0, Tcrypt: 0 });
  const [beatpercentageF, setbeatpercentageF] = useState(0);
  const [beatpercentageW, setbeatpercentageW] = useState(0);
  const [beatpercentageC, setbeatpercentageC] = useState(0);
  const [top3, settop3] = useState({ top1: null, top2: null, top3: null });
  const [rank, setRank] = useState(0);
  const [totalPoints,setTotalpoints] = useState(0);
  axios.defaults.withCredentials = true;

  const fetchdata = async () => {
    try {
      const res = await axios.get('http://localhost:3001')
      if (res.data.Status === 'Success') {
        setName(res.data.username);
        // console.log(username);
      }
    }
    catch (err) {
      console.error(err);

    }
  };
  fetchdata()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const getcount = async () => {
      try {
        const res = await axios.get('http://localhost:3001/count')
        setForensic({ Forensic: res.data.Forensics, Tforensic: res.data.Tforensics });
        setWeb({ Web: res.data.Web, Tweb: res.data.Tweb });
        setCrypt({ crypt: res.data.Crypt, Tcrypt: res.data.Tcrypt });
        setRank(res.data.rank);
        let beatpercent = Math.floor(res.data.beatpercentageF);
        setbeatpercentageF(beatpercent);
        beatpercent = Math.floor(res.data.beatpercentageW)
        setbeatpercentageW(beatpercent)
        beatpercent = Math.floor(res.data.beatpercentageC);
        setbeatpercentageC(beatpercent);
        settop3({ top1: res.data.top1, top2: res.data.top2, top3: res.data.top3 });
        setTotalpoints(res.data.totalpoints);
      }
      catch (err) {
        console.log(err);
      }
    };
    getcount()
  })

  const progressmeter = (param1, param2) => {
    if (param2 === 0) {
      return 0;
    }
    return (param1 / param2) * 100;
  }

  const progress1 = progressmeter(forensic.Forensic, forensic.Tforensic);
  const progress2 = progressmeter(web.Web, web.Tweb)
  const progress3 = progressmeter(crypt.crypt, crypt.Tcrypt);
  return (

    <div className='Profile'>
      <div className='Profile-content'>
        
        <div className='useStat' style={{ backgroudColor: "rgb(40, 40, 40)" }}>
          <div className='userinfo'>

            <div className='profile-img'><img src={hack} alt='profile' /></div>
            <div className='username'>
              {username}
            </div>


          </div>
          <div className='userprogress'>

            <div className='forensics-progress-bar bar1'>
              <div className='udetail'>

                <span id='foren'>Forensics</span>
                <div className='ucount'>
                  <span style={{ fontSize: "20px" }}>{forensic.Forensic}</span>/<span style={{ color: "rgb(255,255,255,0.3)" }}>{forensic.Tforensic}</span>
                </div>
                <div className='beatpercent'>
                  <span> Beats:{beatpercentageF}%</span>
                </div>
              </div>

              <div className='progress-bar forensic'>

                <div className='progress-bar-fill forensic-fill' style={{ transform: `translateX(${progress1 - 100}% )` }}>

                </div>
              </div>
            </div>

            <div className='Web-progress-bar bar2 '>
              <div className='udetail'>

                <span id='foren'>Web</span>
                <div className='ucount'>
                  <span style={{ fontSize: "20px" }}>{web.Web}</span>/<span style={{ color: "rgb(255,255,255,0.3)" }}>{web.Tweb}</span>
                </div>
                <div className='beatpercent'>
                  <span> Beats:{beatpercentageW}%</span>
                </div>
              </div>

              <div className='progress-bar web'>

                <div className='progress-bar-fill web-fill' style={{ transform: `translateX(${progress2 - 100}% )` }}>

                </div>
              </div>
            </div>

            <div className='crypt-progress-bar bar3 '>
              <div className='udetail'>

                <span id='foren'>Crypto</span>
                <div className='ucount'>
                  <span style={{ fontSize: "20px" }}>{crypt.crypt}</span>/<span style={{ color: "rgb(255,255,255,0.3)" }}>{crypt.Tcrypt}</span>
                </div>
                <div className='beatpercent'>
                  <span> Beats:{beatpercentageC}%</span>
                </div>
              </div>

              <div className='progress-bar crypto'>

                <div className='progress-bar-fill crypto-fill' style={{ transform: `translateX(${progress3 - 100}% )` }}>

                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div className='rank-module'>
          <div className='rank-and-top' style={{ backgroudColor: "rgba(40,40,40,255)" }}>

            <div className="rank">
              <div className='rank-word'>
                <span style={{ fontSize: "5rem", color: "#82fd1e" }}>Rank</span>
              </div>
              <div>

                <span style={{ fontSize: "10rem" }}>{rank}</span>
              </div>
            </div>
            <div className='partition'>  </div>

            <div className="top-ranking">
              <div className="rankings">
                TOP 3
                <div className='rankers'>1.{top3.top1}</div>
                <div className='rankers'>2.{top3.top2}</div>
                <div className='rankers'>3.{top3.top3}</div>
              </div>
            </div>
          </div>
          <div className="profile-total-points">
            <div style={{fontSize:"30px"}}>
              Total Points
              </div>
            <div style={{fontSize:"40px",color:"#82fd1e"}}>
              {totalPoints}
            </div>
          </div>

        </div>




      </div>


    </div>
  )
}

