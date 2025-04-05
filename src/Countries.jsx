
import React, { useState } from 'react';
import { use } from 'react';


const countries = ({countriesPromise}) => {
  
  const [visitedCountries, setVisitedCountries] = useState([]);

  const countries = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    console.log("Visited Countries Clicked to be added", country);
    const newVisitedCountries = [...visitedCountries, country];
    // visitedCountries.push(country);
    
    setVisitedCountries(newVisitedCountries);
  }
  return (
    <div>
      <h1>Traveling Countries: {countries.length}</h1>
      <h3>Travel to far : {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
        }
      </ol>
         
      <div className='countries'>
        {
countries.map(country => {
  <country>
    key={country.cca3}
    handleVisitedCountries={handleVisitedCountries}
    country={country}
  </country>
})
        }
      </div>
    </div>
  );
};

export default countries;