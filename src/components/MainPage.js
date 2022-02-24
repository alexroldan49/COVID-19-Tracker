import react from "react";
import { useState, useEffect } from "react";
import MainBody from "./MainBody";


function MainPage(){

    let [totalCases, setTotalCases] = useState({})
    const API = "https://disease.sh/v3/covid-19/all"

    useEffect(()=>{
        fetch(API)
        .then(r => r.json())
        .then(cases => setTotalCases(cases))
        .then(console.log(totalCases.cases))
        .catch(error => console.log(error))
    }, [])

    return (
        <>
        <div className="center" >
            <img className="background-img" src="https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
        </div>
        <MainBody allStats={totalCases} totalCases={totalCases.cases} />
        </>
    )
    
    
}
export default MainPage;
