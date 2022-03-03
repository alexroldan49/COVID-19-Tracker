import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import {Routes, Route} from 'react-router-dom'
import Country from './components/Country';
import Vaccines from './components/Vaccines';
import LearnMore from './components/LearnMore';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

function App() {

  let [totalCases, setTotalCases] = useState({})
  let [allCountriesData, setAllCountriesData] = useState([])
  const API = "https://disease.sh/v3/covid-19/all"
  const countriesAPI = "https://disease.sh/v3/covid-19/countries"

  function mappingContries(data){
    data.forEach(element => {
      console.log(element.country)
    });
  }

  useEffect(()=>{
      fetch(countriesAPI)
      .then(r => r.json())
      .then(data => setAllCountriesData(data))
      .catch(error => console.log(error))
  }, [])

  useEffect(()=>{
      fetch(API)
      .then(r => r.json())
      .then(cases => setTotalCases(cases))
      .catch(error => console.log(error))
  }, [])

  let mappedCountries = allCountriesData.map(element => {
    if(element.country === "USA" || element.country === "USA"){
      return [element.countryInfo.iso2, element.cases]
    }else{
      return [element.country, element.cases]
    }
  })

  let allCountries = allCountriesData.map( con =>{
    return con.country
  })

  let geoData = [["Country", "Covid-19 Cases"], ...mappedCountries]
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage totalCases={totalCases} />} />
        <Route path="Country" element={<Country allCountries={allCountries} geoData={geoData} allCountriesData={allCountriesData} />} />
        <Route path="Vaccines" element={<Vaccines />} />
        <Route path="Learn-more" element={<LearnMore />} />
      </Routes>
    </div>
  );
}

export default App;
