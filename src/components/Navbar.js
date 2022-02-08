import react from "react";

function Navbar(){
    return (
        <div className="navbar" >
                <a className="title" >COVID-19 Tracker</a>
            <div className="nav-links">
                <a>Home</a>
                <a>Country</a>
                <a>Vaccines</a>
                <a>Learn More</a>
            </div>
            
        </div>
    )
}

export default Navbar