import React, { useState } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function PieChartPage({allCountries, allCountriesData}){
    
    const [country, setCountry] = useState("")
    const [appliedChartData, setAppliedChartData] = useState([])
    const [flagImg, setFlagImg] = useState("")
    const [filteredCountry, setFilteredCountry] = useState([])
    const [num, setNum] = useState(4)
    const [pieData, setPieData] = useState([[
        ["Country", "Amount"],
        ["Todays Cases", 3],
        ["Todays deaths", 3],
        ["Todays recovered", num]
    ]])

    let pieDataInnerArray = pieData[0]
    
    // let pieData = allCountriesData.map( con =>{
    //     return ([
    //         [con.country, "Amount"],
    //         ["Cases", con.cases],
    //         ["deaths", con.deaths],
    //         ["recovered", con.recovered]
    //     ])
    // })

    let selectedCountryData = allCountriesData.filter(c =>{
        return c.country === country
    })

    // let pieData = selectedCountryData.map(con=>{
    //     return [
    //         [con.country, "Amount"],
    //         ["Todays Cases", con.todayCases],
    //         ["Todays deaths", con.todayDeaths],
    //         ["Todays recovered", con.todayRecovered]
    //     ]
    // })


    let allCountryOptions = allCountries.map(con=>{
        return <option value={con}/>
    })


    function countrySubmit(e){
        e.preventDefault()
        setFilteredCountry(country)

        setNum(9)
        // setPieData(selectedCountryData.map(con=>{
        //     return( [[
        //         [con.country, "Amount"],
        //         ["Todays Cases", con.todayCases],
        //         ["Todays deaths", con.todayDeaths],
        //         ["Todays recovered", con.todayRecovered]
        //     ]])
        // }))

        setAppliedChartData(pieData)
        setFlagImg(selectedCountryData[0].countryInfo.flag)
        console.log(selectedCountryData)
        console.log(pieData)
    }


    function handleChange(e){
        setCountry(e.target.value)
    }

    
    console.log(pieDataInnerArray)
    console.log(pieData)
   
    return(
        <>
            <form onSubmit={ e => countrySubmit(e)} >
                <fieldset className="country-select-field" >
                    <legend>Select Country</legend>
                    <label>Country</label>
                    <div>
                        <input 
                        list="countries" 
                        type="text"
                        value={country}
                        onChange={e=> handleChange(e)}
                         />
                        <datalist style={{height: "50px"}} id="countries" >
                            {allCountryOptions}
                        </datalist>
                    </div>
                    <div style={{display: "flex", justifyContent: "flex-end"}} >
                        <button style={{backgroundColor: "#4a68f0", color: "white"}} className="tab-btn">Search</button>
                    </div>
                </fieldset>
            </form>
            {/* <PieChart filteredCountry={filteredCountry} appliedChartData={appliedChartData} pieData={pieData} allCountriesData={allCountriesData} /> */}
            <LineChart pieData={pieData} />
            <div className="country-grid">
                <img src={flagImg} />
                <img src={flagImg} />
                <img src={flagImg} />
                <img src={flagImg} />
            </div>
        </>
    )
}
export default PieChartPage