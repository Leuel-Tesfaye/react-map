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
  const list = numbers.map ((number) => <li>{number}</li>)
  return list

}

const App = () =>{
  const numbers = [1,2,3,4,5,6]
  return (
      <div className='container'>
        <div>
          <h1>Numbers list </h1>
          <ul>
            <Number numbers={numbers}/>
          </ul>
        </div>
      </div>
  )
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement)

