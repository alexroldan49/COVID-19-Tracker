import react from "react";


function MainBody({totalCases, allStats}){

    // let mill = ""
    
        function comas(num){
            let newNum = ""
            let oldNum = num + ""
            let byThree = 0
            for(let i= oldNum.length -1; i >= 0 ; i--){
                if( byThree  % 3 === 0 && byThree > 0){
                    newNum += ","
                    newNum += oldNum[i]
                    byThree++
                }else{
                    newNum += oldNum[i]
                    byThree ++
                }
            }
            return newNum.split("").reverse().join("")
            
        }
    
     let cases = comas(totalCases)
     let todaysCases = comas(allStats.todayCases)
     let totalTest = comas(allStats.tests)
     let totalRecoversToday = comas(allStats.todayRecovered)

    return(
        <>
            <h3 className="bold" >TOTAL COVID-19 CASES</h3>
            <h1 className="total-count" >{cases}</h1>
            <h3 style={{fontWeight: "800", margin: "0", padding: "0", fontSize: "1.7rem"}} >People Throughout the World</h3>
            <h2 style={{color: "#175987", padding: "0", margin: "0", marginTop: "20px"}} >Stay informed with the latest statistics for COVID-19</h2>
            <div className="main-grid" >
                <div className="main-stat" >
                    <h1>Today's Cases</h1>
                    <h3 className="stat-font" >{`Today there have been ${todaysCases} additional cases throughout the world`}</h3>
                </div>
                <div className="main-stat" >
                    <h1>Today's Recoveries</h1> 
                    <h3>{`${totalRecoversToday} people have recovered from covid today.`}</h3>
                </div>
                <div className="main-stat" >
                    <h1 className="">Total Tests</h1> 
                    <h3>{`A total of ${totalTest} have been tested for covid.`} </h3>
                </div>
            </div>
            <div className="info-container">
                <div style={{marginLeft: "7vw"}} >
                    <h1 className="bold" style={{fontSize: "3rem"}} >What is Covid-19</h1>
                    <h3 className="info" >According to the CDC, COVID-19 is a respiratory disease caused by SARS-CoV-2, a coronavirus discovered in 2019. The virus spreads mainly from person to person through respiratory droplets produced when an infected person coughs, sneezes, or talks. Some people who are infected may not have symptoms. For people who have symptoms, illness can range from mild to severe. Adults 65 years and older and people of any age with underlying medical conditions are at higher risk for severe illness.</h3>
                </div>
                <div style={{transform: "translateX(5%)"}} className="divider" />
                <div className="info-with-image" >
                    <img className="info-image" src="https://i.ibb.co/hdJH2Cz/Untitled-1080-1920-px-1920-1080-px.png" />
                    <div style={{marginRight: "5vw", textAlign: "left"}} >
                        <h1 style={{textAlign: "center", fontSize: "2.5em"}} className="bold" >Common Covid-19 Symptoms</h1>
                        <h3>Some common Covid-19 symptoms are know to be</h3>
                        <ul className="symptoms-list" >
                            <li>Fever</li>
                            <li>Chills</li>
                            <li>Cough</li>
                            <li>Shortness of breath or difficulty breathing</li>
                            <li>Muscle or body aches</li>
                            <li>Fatigue</li>
                            <li>Headaches</li>
                            <li>New loss of taste or smell</li>
                            <li>Sore throat</li>
                            <li>Congenstion or runny nose</li>
                            <li>Nasusea, or vomiting</li>
                            <li>Diarrhea</li>
                            <li>And more</li>
                        </ul>
                        <h3 style={{maxWidth: "40vw"}} >These sympotms can range from mild to severe illness. People can begin developing symptoms from 2-14 days after exposure to the virus. Please get tested if you are experiencing any of these symptoms.</h3>
                    </div>
                </div>
                <div style={{transform: "translateX(-5%)"}} className="divider" />
                <div className="info-container" >
                    <div style={{justifyContent: "space-around"}} className="info-with-image">
                        <div style={{ marginLeft: "7vw", textAlign: "left"}} className="opacity-card" >
                            <h1 style={{color: "white", textAlign: "center", fontSize: "3.5em"}} >Variants</h1>
                            <h3 style={{color: "white"}} >A variant is viral genome (genetic code) that may contain one or more mutations. According to Hopkins medicine, It is the nature of RNA viruses such as the coronavirus to evolve and change gradually. Geographic separation tends to result in genetically distinct variants.</h3>
                            <h3 style={{color: "white"}} >Mutations in viruses — including the coronavirus causing the COVID-19 pandemic — are neither new nor unexpected. All RNA viruses mutate over time, some more than others. For example, flu viruses change often, which is why doctors recommend that you get a new flu vaccine every year.</h3>
                        </div>
                            <img style={{marginTop: "0", marginRight: "7vw"}} className="info-image" src="https://i.ibb.co/zZNWLB4/Untitled-1080-1920-px-1920-1080-px-1.png" />
                    </div>
                </div>
            </div>
        </>  
    )
}

export default MainBody