import React, { useEffect, useState } from 'react'
import hack from '../hacktheworld.avif'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [auth, setAuth] = useState(false);
    const [msg,setmsg] = useState('');
    // const navigate = useNavigate();
    // const [username,setName] = useState('')
    
    axios.defaults.withCredentials = true;
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(res =>{
            if(res.data.Status==='Success'){
                setAuth(true);
                // setName(res.data.username)
                // console.log(auth);
                // const token = 
                // console.log(token);
                // navigate('/login');
                // console.log(document.cookie['token']);
                // const token = document.cookie;
                // console.log(token['token']);
                console.log("Successful");
            }
            else{
                setAuth(false)
                setmsg(res.data.Error)
            }
          
        })
        .then(err=> console.log(err));
    })
    
        // const cookie = document.cookies()
        // console.log(cookie);
   
    return (
        // auth ?
            <div >

              
                <div className="background firstSection">
                    <div className="box-main">
                        <div className="firsthalf">
                            <h1>Welcome<br /> to Hacker's <br />world</h1>
                        </div>
                        <div className="secondhalf">
                            <img src={hack} alt="hacker" />
                        </div>
                    </div>
                </div>

                <section className="learn" id="Learn">
                    <div style={{ fontSize: "35px", marginBottom: "100px" }}>
                        <h1 style={{ color: "greenyellow", textAlign: "center" }}>PRACTICE</h1>

                    </div>
                    <div className="categories">
                        <Link to='/home/web' style={{color:"white",textDecoration:"none"}}>
                        <div className="Category Web">
                            <h2>Web</h2>
                            <p>Learn about all top 10 OWASP vulnerabilities</p>
                        </div>
                        </Link>
                        <Link to='/home/forensic' style={{color:"white",textDecoration:"none"}}>
                        <div className="Category Forensics">
                            <h2>Forensics</h2>
                            <p>Learn tools like voltality and image steganograpy</p>
                        </div>
                        </Link>
                        <Link to='/home/crypto' style={{color:"white",textDecoration:"none"}}>
                        <div className="Category Cryptography">
                            <h2>Cryptography</h2>
                            <p>Learn different encryption algorithms like RSA and AES</p>
                        </div>
                        </Link>

                    </div>
                </section>


                <footer >
                    <hr />
                    <div className="link-copy">

                        <div className="footer-links">
                            <h3>Hacker's World School</h3>
                            <ul className="media">
                                <li><a href="#"><i className="fa-brands fa-facebook" id="face"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram" id="insta"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-youtube" id="yt"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter" id="twit"></i></a></li>
                            </ul>
                        </div>
                        <div className="copyright">
                            <p>Copyright &copy; Hacker's World.Designed By <span>mhacker.</span></p>
                        </div>
                    </div>

                </footer>

            </div>
            // :
            // <div>
            //     <nav className="navbar xbackground">
            //         <ul className="nav-list">

            //             <div className="logo"><img src={hack} alt="hacker" /></div>
            //             <li><a href="#Home" >Home</a></li>
            //             <li><a href="#Learn" >Learn</a></li>
            //             <li><a href="#Practice" >Practice</a></li>
            //             <li><a href="#Contacts" >Contacts</a></li>
            //         </ul>

            //         <div className="rightnav">
            //         <button>sign in</button>
            //         <button>log in</button>
            //         </div>
            //     </nav>
            //     <div className="background firstSection">
            //         <div className="box-main">
            //             <div className="firsthalf">
            //                 <h1>Welcome<br /> to Hacker's <br />world</h1>
            //             </div>
            //             <div className="secondhalf">
            //                 <img src={hack} alt="hacker" />
            //             </div>
            //         </div>
            //     </div>

            //     <section className="learn" id="Learn">
            //         <div style={{ fontSize: "35px", marginBottom: "100px" }}>
            //             <h1 style={{ color: "greenyellow", textAlign: "center" }}>LEARN</h1>

            //         </div>
            //         <div className="categories">

            //             <div className="Category Web">
            //                 <h2>Web</h2>
            //                 <p>Learn about all top 10 OWASP vulnerabilities</p>
            //             </div>
            //             <div className="Category Forensics">
            //                 <h2>Forensics</h2>
            //                 <p>Learn tools like voltality and image steganograpy</p>
            //             </div>
            //             <div className="Category Cryptography">
            //                 <h2>Cryptography</h2>
            //                 <p>Learn different encryption algorithms like RSA and AES</p>
            //             </div>

            //         </div>
            //     </section>


            //     <footer >
            //         <hr />
            //         <div className="link-copy">

            //             <div className="footer-links">
            //                 <h3>Hacker's World School</h3>
            //                 <ul className="media">
            //                     <li><a href="#"><i className="fa-brands fa-facebook" id="face"></i></a></li>
            //                     <li><a href="#"><i className="fa-brands fa-instagram" id="insta"></i></a></li>
            //                     <li><a href="#"><i className="fa-brands fa-youtube" id="yt"></i></a></li>
            //                     <li><a href="#"><i className="fa-brands fa-twitter" id="twit"></i></a></li>
            //                 </ul>
            //             </div>
            //             <div className="copyright">
            //                 <p>Copyright &copy; Hacker's World.Designed By <span>mhacker.</span></p>
            //             </div>
            //         </div>

            //     </footer>
            // </div>
    )
}
