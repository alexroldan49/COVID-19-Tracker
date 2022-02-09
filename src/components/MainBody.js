import react from "react";


function MainBody({totalCases}){

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
            <h1 className="total-count" >{mill}</h1>
            <div className="box" >
                
            </div>
        </>
    )
}

export default MainBody