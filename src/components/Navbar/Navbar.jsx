import React from 'react';
import { NavLink } from 'react-router-dom';
import s from  './Navbar.module.css'
const Navbar = () => {
return (
    <nav className = {s.nav}>
    <div className = {s.item} >
    <NavLink   to = "/profile" style={({ isActive }) =>({color: isActive ? 'blue' : 'white'})}> Profile</NavLink>
    </div>
    <div  className = {s.item}>
    <NavLink  to = "/dialogs" style={({ isActive }) =>({color: isActive ? 'blue' : 'white'})}>  Message</NavLink>
    </div>
    <div  className = {s.item}>
    <NavLink  to = "/photo" style={({ isActive }) =>({color: isActive ? 'blue' : 'white'})}>  Photo</NavLink>
    </div>
    
    <div  className = {s.item}>
    <a>  Music</a>
    </div>
    </nav>

)
}
export default Navbar