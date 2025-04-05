import React, { useState } from 'react';
import '.src/Country.css';

    const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
        const [visited, setVisited] = useState(false);
        console.log(handleVisitedCountries);
     
        const handleVisited = () => {
    
            setVisited(!visited);
            handleVisitedCountries();
    }
    return(

        //*start poaergikgergfik

        <div>
            <h3>Name:  {country.name.common}</h3>
            <img src={country.flags?.png} alt="" />
            <p>Population : {country.population}</p>
            <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}> Add Visited Flag </button>
        </div>

        //*end poaergikgergfik


        // <div className={`country, flag ${visited && 'country-visited','flag-visited' }`}>
        //     <h3>Name : {country.name.common}</h3>
        //     <img src={country.flags.png}alt="" />
        //     <p>Independent Country : {country.independent ? 'Free' : 'Not Free'}</p>
        //     <p>Population : {country.population}</p>
        //     <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        //     <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        // </div>
    )
};

export default Country;