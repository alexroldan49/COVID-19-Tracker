import react from "react";
import { useState, useEffect } from "react";
import MainBody from "./MainBody";


function MainPage( {totalCases} ){
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
