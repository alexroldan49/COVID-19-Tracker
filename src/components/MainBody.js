import react from "react";


function MainBody({totalCases, allStats}){

    let mill = ""
    let cases = totalCases + ""
        function comas(totalCases){
            for(let i=0; i < (totalCases + "").length; i++){
                if( (i  % 3 === 0 && i > 0)){
                    mill += ","
                    mill += cases[i]
                }else{
                    mill += cases[i]
                }
            }
        }
    
        comas()

    return(
        <>
            <h3 className="bold" >TOTAL COVID-19 CASES</h3>
            <h1 className="total-count" >{mill}</h1>
            <div className="main-grid" >
                <div className="main-stat" >
                    <h2>Today's Cases</h2> 
                </div>
                <div className="main-stat" >
                    <h2>Today's Recoveries</h2> 
                </div>
                <div className="main-stat" >
                    <h2>Total Tests</h2> 
                </div>
            </div>
        </>  
    )
}

export default MainBody