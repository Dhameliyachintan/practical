import { useEffect, useState } from "react";
import { countries } from "../constant";

export default function App() {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        console.log(country[0]);
        console.log(country[1]);
    }, [country]);

    return (
        <div className="App">
            <select
                value={country}
                onChange={(e) => {
                    console.log(e.target.value);
                    setCountry([e.target.value]);
                }}
            >
                {countries.map((item, index) => {
                    return (
                        <option key={index} value={index}>
                            {item.name}
                        </option>
                    );
                })}
            </select>


            <select>
                {countries[country] &&
                    countries[country].cities.map((item, index) => {
                        return <option value={index}>{item}</option>;
                    })}
            </select>
        </div>
    );
}
