import React from 'react';
import ReactDOM from 'react-dom';

/** Mapping arrays : An array is the most frequently used data structure to handle many kinds of problems.
 * we use a map to modify an array to list of jsx by adding html to each HTML elements. 
 * 
 * Most of the time data is as an array or array of objects . 
 * To render this array or array of objects we modify the data by using Map. 
 * 
 */

/**const App = () =>{
  return (
    <div className='container'>
      <div>
      <h1>Number list </h1>
        {[1,2,3,4,5]}
      </div>
      
    </div>
  )
} */

/** As you see the numbers are attached together in one line. to avoid this we modify the array and change the array elements to JSX elements. */

const Number = ({numbers}) =>{
  const list = numbers.map ((numbers) => <li>{numbers}</li>)
  return list
}

const NumberList = () =>{
  const numbers  = [1,2,3,4,5]
  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
        <Number numbers={numbers}/>
      </ul>
      </div>
     
    </div>
  )
}
/** Mapping array of objects  */
const countries = [
  {name: 'Finland ', city: 'Helsinki'},
  {name: 'Ethiopia', city: 'Addis Ababa'},
  {name: 'Kenya', city: 'Nirobi'},
  {name: 'England', city: 'London'},
] 
  const Country = ({country:{name,city}}) =>{
    return (
        <div>
          <h1>{name}</h1>
          <small>{city}</small>
        </div>
    )
  }
  const Countries = ({countries}) =>{
    const countryList = countries.map((country) => <Country country={country} />)
    return <div>{countryList}</div>
  }

const CountryList = ()=>{
  return(
    <div>
    <div>
      <h1>Countries List</h1>
      <Countries countries={countries}/>
    </div>
  </div>
  )

}
const App = () =>{
  return(
    <div>
    {<NumberList/>}
    {<CountryList/>}
  </div>
  )

}
const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)

