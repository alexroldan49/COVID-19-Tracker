import react from "react";

function Vaccines({vaccines}){
    
    return(
    <>
        <div className="vaccine-banner" >
            <p>For more information about COVID-19 Vaccines please visit</p>
            <a href="https://www.vaccines.gov/" >vaccines.gov</a>
        </div>
        <img src={require('./images/vaccine-banner-edited.png')} className="vaccination-banner" />
    </>
    )
}
export default Vaccines