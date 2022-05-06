import react from "react";
import Chart from "react-google-charts";

function GeoChart({allCountriesData, geoData}){
      const options = {
        colorAxis: { colors: ["#ffdbdb", "#ff4f4f", "rgb(255, 124, 124)", "#e31b23", "rgb(139, 2, 2)"] },
        // backgroundColor: "#81d4fa",
        datalessRegionColor: "#f8bbd0",
        defaultColor: "#f5f5f5",
      };
    return(
        <>
            <h2>Today's Global Covid-19 Stats</h2>
            <Chart chartType="GeoChart" width="100%" height="70vh" data={geoData} options={options} />
        </>
    )
}
export default GeoChart