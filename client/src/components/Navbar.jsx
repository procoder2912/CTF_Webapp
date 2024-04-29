
import axios from 'axios';
import hack from '../hacktheworld.avif'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [username, setName] = useState('')
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(res => {
                if (res.data.Status === 'Success') {
                    setName(res.data.username)

                }


            })
            .then(err => console.log(err));
    })

    const deletecookie = () => {
        axios.get('http://localhost:3001/logout')
            .then(res => {
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }).catch(err => console.log(err));
    }

    
        const [isDropdownVisible, setIsDropdownVisible] = useState(false);

        const toggleDropdown = () => {
            setIsDropdownVisible(!isDropdownVisible);
        
        }
    
    return (
        <div>
            <nav className="navbar xbackground">
                <ul className="nav-list">

                    <div className="logo"><img src={hack} alt="hacker" /></div>
                    <li><Link to='/home'><a href="#Home" >Home</a></Link></li>
                    <li><Link to='/home/learn'><a href="Learn" >Learn</a></Link></li>
                    <li><a href="#Practice" >Practice</a></li>
                    <li><a href="#Contacts" >CTF</a></li>
                </ul>

                <div className="rightnav">

                    <p style={{fontSize:"20px"}}onClick={toggleDropdown}>{username}</p>
                    {isDropdownVisible && (
                    <div className='dropdown-menu'>
                        <div className='sub-dropdown'>
                           <Link to='/home/profile'>
                           <button onClick={toggleDropdown}>Profile</button>
                           </Link> 
                            <hr />
                            <button onClick={deletecookie}>Logout</button>
                        </div>
                    </div>
                    )}
                </div>
            </nav>
        </div>
    )
}
