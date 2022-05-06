import react from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import GeoChart from "./GeoChart";
import PieChartPage from "./PieChartPage";

function Country({allCountries, allCountriesData, geoData}){

  
  

    return(
        <>
            <div className="country-tab" >
                <div className="btn-tab-group" >
                    <NavLink to="/Country/global" >
                        <button className="tab-btn" >Map</button>
                    </NavLink>
                    <NavLink to="/Country/search-country" >
                        <button className="tab-btn" >Search</button>
                    </NavLink>
                </div>
            </div>
        <Routes>
            <Route path="search-country" element={<PieChartPage allCountriesData={allCountriesData} allCountries={allCountries} />} />
            <Route path="global" element={<GeoChart geoData={geoData} allCountriesData={allCountriesData} />} />
        </Routes>
        </>
    )
}

export default Country