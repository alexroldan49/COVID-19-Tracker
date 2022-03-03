import react from "react";
import GeoChart from "./GeoChart";

function Country({allCountries, allCountriesData, geoData}){

    let allCountryOptions = allCountries.map(con=>{
        return <option value={con}/>
    })

    return(
        <>
            <div className="country-tab" >
                <div className="btn-tab-group" >
                    <button className="tab-btn" >Map</button>
                    <button className="tab-btn" >Search</button>
                </div>
            </div>
            <fieldset className="country-select-field" >
                <legend>Select Country</legend>
                <label>Country</label>
                <div>
                    <input list="countries" type="text" />
                    <datalist style={{height: "50px"}} id="countries" >
                        {allCountryOptions}
                    </datalist>
                </div>
            </fieldset>
            <h2></h2>
            <GeoChart geoData={geoData} allCountriesData={allCountriesData} />
        </>
    )
}

export default Country