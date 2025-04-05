import './App.css'
// import Countries from './countries'
import{Suspense} from 'react'
import Foreign from './Foreign'


const countriesPromise = fetch("https://restcountries.com/v3.1/all")
.then(res => res.json());


function App() {


  return (
    <>
      <Suspense fallback={<h3>Loading......</h3>}>
        {/* <Countries countriesPromise={countriesPromise}></Countries> */}
        <Foreign countriesPromise={countriesPromise}></Foreign>
      </Suspense>
        
    </>
  )
}

export default App
