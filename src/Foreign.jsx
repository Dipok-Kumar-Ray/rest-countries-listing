import React, { use, useState } from 'react';
// import { use } from 'react';
const Foreign = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([]);
    const foreign = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        console.log('Visited Countries Clicked to be added', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        console.log('Added to Visited Flags', flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }


    return (
        <div>
            <h1>Traveling Countries : {foreign.length}</h1>
            <h3>Travel to far : {visitedCountries.length}</h3>
            <div>
                {
                   visitedFlags.map(flag => <img key={flag.cca3} src={flag.flags.png} alt="" />) 
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    foreign.map(country => {
                        return (
                            <div key={country.cca3} className='country'>
                                <h3>Name : {country.name.common}</h3>
                                {/* <h3>Name : {country.name.flag}</h3> */}
                                <img src={country.flags.png} alt="" />
                                <p>Independent Country : {country.independent ? 'Free' : 'Not Free'}</p>
                                <p>Population : {country.population}</p>
                                <button className={visitedCountries.includes(country) ? 'btn-visited' : 'btn-not-visited'} onClick={() => handleVisitedCountries(country)}>{visitedCountries.includes(country) ? 'Visited' : 'Not Visited'}</button>
                                {/* <button className={visitedFlags.includes(flag) ? 'btn-visited' : 'btn-not-visited'} onClick={() => handleVisitedFlags(flag)}>{visitedFlags.includes(flag) ? 'Visited' : 'Not Visited'}</button> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Foreign;