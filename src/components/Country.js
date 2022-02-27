import react from "react";
import GeoChart from "./GeoChart";

function Country({allCountriesData, geoData}){

    return(
        <>
            <GeoChart geoData={geoData} allCountriesData={allCountriesData} />
        </>
    )
}

export default Country