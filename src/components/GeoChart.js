import react from "react";
import Chart from "react-google-charts";

function GeoChart({allCountriesData, geoData}){
      const options = {
        colorAxis: { colors: ["rgb(255, 124, 124)", "#e31b23", "rgb(139, 2, 2)"] },
        // backgroundColor: "#81d4fa",
        datalessRegionColor: "#f8bbd0",
        defaultColor: "#f5f5f5",
      };
    return(
        <>
            <Chart chartType="GeoChart" width="100%" height="70vh" data={geoData} options={options} />
        </>
    )
}
export default GeoChart