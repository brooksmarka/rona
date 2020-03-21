import useStats from "../utils/useStats";
import Stats from "./Stats";
import { useState } from "react";

export default function CountrySelector(){
    
    const countries = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setselectedCountry] = useState('USA');
    if(!countries) return <p>Loading...</p>
    return (
        <div>
            <h2>Currently Showing {selectedCountry}</h2>
            <select onChange ={(e)=>[
                setselectedCountry(e.target.value)
            ]}>
                {Object.entries(countries.countries).map((
                    [country, code]) => (
                        <option key={code} value={countries.iso3[code]}>
                            {country}
                        </option>
                    ))}
            </select>
            <Stats url = {`https://covid19.mathdro.id/api/countries/${selectedCountry}`}>

            </Stats>
        </div>
    )
}