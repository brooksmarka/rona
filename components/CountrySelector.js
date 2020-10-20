import useStats from "../utils/useStats";
import Stats from "./Stats";
import { useState } from "react";

export default function CountrySelector(){
    
    const { stats: countries, loading, error } = useStats(
        'https://covid19.mathdro.id/api/countries'
      );
      
    const [selectedCountry, setSelectedCountry] = useState('USA');
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error...</p>;

    //We're having an issue with partial entries to the countries object, 
    //let's create a list of countries that all have iso3 numbers 
    let filteredCountries = [];
    countries.countries.forEach(country => {
        if (country["iso3"]){
            filteredCountries.push(country)
        }
    })

    return (
        <div>
            <h2>Currently Showing {selectedCountry}</h2>
            <select 
                onChange={e => {
                    setSelectedCountry(e.target.value);
                }}
            >
                {filteredCountries.map((country, code) => (
                    <option 
                        selected={selectedCountry === countries.countries[code].iso3}
                        key={code} 
                        value={countries.countries[code].iso3}>
                            {countries.countries[code].name}
                    </option>
                ))}
            </select>
            <Stats
                url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
            ></Stats>
        </div>
    );
}