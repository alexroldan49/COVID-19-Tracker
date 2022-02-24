import react from "react";
import {NavLink} from "react-router-dom"

function Navbar(){
    return (
        <div className="navbar" >
                <a className="title" >COVID-19 Tracker</a>
            <div className="nav-links">
                <NavLink className={(data)=> data.isActive ? "blue" : "white"} to="/" >
                    <a>Home</a>
                </NavLink>
                <NavLink to="/Country" >
                    <a>Country</a>
                </NavLink>
                <NavLink to="/Vaccines">
                    <a>Vaccines</a>
                </NavLink>
                <NavLink to="/learn-more">
                    <a>Learn More</a>
                </NavLink>
            </div>
            
        </div>
    )
}

export default Navbar