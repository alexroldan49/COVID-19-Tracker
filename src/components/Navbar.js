import react from "react";
import {NavLink} from "react-router-dom"

function Navbar(){
    return (
        <div className="navbar" >
            <NavLink className={(data)=> data.isActive ? "white" : "white"} to="/" >
                <a className="title" >COVID-19 Tracker</a>
                </NavLink>
            <div className="nav-links">
                <NavLink className={(data)=> data.isActive ? "active" : "white"} to="/" >
                    <a>Home</a>
                </NavLink>
                <NavLink className={(data)=> data.isActive ? "active" : "white"} to="/Country" >
                    <a>Country</a>
                </NavLink>
                <NavLink className={(data)=> data.isActive ? "active" : "white"} to="/Vaccines">
                    <a>Vaccines</a>
                </NavLink>
                <NavLink className={(data)=> data.isActive ? "active" : "white"}   to="/learn-more">
                    <a>Learn More</a>
                </NavLink>
            </div>
            
        </div>
    )
}

export default Navbar