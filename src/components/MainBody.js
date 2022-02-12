import react from "react";


function MainBody({totalCases, allStats}){

    // let mill = ""
    
        function comas(num){
            let newNum = ""
            let oldNum = num + ""
            console.log(oldNum)
            let byThree = 0
            for(let i= oldNum.length -1; i >= 0 ; i--){
                console.log(oldNum[i])
                console.log(newNum)
                if( byThree  % 3 === 0 && byThree > 0){
                    newNum += ","
                    newNum += oldNum[i]
                    byThree++
                    console.log(newNum)
                }else{
                    newNum += oldNum[i]
                    byThree ++
                }
            }
            return newNum.split("").reverse().join("")
            
        }
    
     let cases = comas(totalCases)
     let todaysCases = comas(allStats.todayCases)
     console.log(allStats.todayCases)

    return(
        <>
            <h3 className="bold" >TOTAL COVID-19 CASES</h3>
            <h1 className="total-count" >{cases}</h1>
            <h3 style={{fontWeight: "800", margin: "0", padding: "0"}} >Throughout the world</h3>
            <div className="main-grid" >
                <div className="main-stat" >
                    <h2>Today's Cases</h2>
                    <h3>{`Today there have been ${todaysCases} additional cases throughout the world`}</h3>
                </div>
                <div className="main-stat" >
                    <h2>Today's Recoveries</h2> 
                </div>
                <div className="main-stat" >
                    <h2 className="">Total Tests</h2> 
                </div>
            </div>
        </>  
    )
}

export default MainBody