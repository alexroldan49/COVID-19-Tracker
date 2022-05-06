import React, { useState } from "react";
import Chart from "react-google-charts";

function PieChart({pieData, allCountriesData, appliedChartData, filteredCountry}){
    
let test = [ ['New Zealand', 'Amount'],
 ['Todays ', 188680],
 ['deaths', 63],
 ['recovered', 36138]]

 let allCountryCharts = allCountriesData.map(con =>{
     return(
        <Chart width="50vw" height="80vh" chartType="PieChart"
        id={con.country}
         data={[
            [con.country, "Amount"],
            ["Todays Cases", con.todayCases],
            ["Todays deaths", con.todayDeaths],
            ["Todays recovered", con.todayRecovered]
         ]}
          options={{title: "Covid-19 Cases and Population"}} />
     )
 })

 
   

    return(
        <>
        <Chart width="50vw" height="80vh" chartType="PieChart" data={pieData[0]} options={{title: "Covid-19 Cases and Population"}} />
        </>
    )
}
export default PieChart