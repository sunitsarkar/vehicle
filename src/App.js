import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import list from './arr';
import Popup from 'reactjs-popup'

function App() {

  let [arr, setArr] = useState('');

  // axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2").then((response) => {
  //   // console.log(response.data);
  //   setArr(response.data.Results);
  // });
  // console.log(arr)

  const popup=(item)=>{
    <Popup >
      <div>
        <p>{item.name}</p>
        <p>popup</p>
      </div>

    </Popup>
  }

  return (
    <div className="App">
      <h1>VEHICLE MANUFACTURERS</h1>
      <div id='search-select'>
        <div id='search'>
          <label><b>search:</b></label>
          <input ></input>
        </div>
        <div>
          <label><b>Filter by Vehicle Type:</b></label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <br />
      <table id='table'>
        <thead>
          <td>Name</td>
          <td>Country</td>
          <td>Type</td>
        </thead>
        <tbody>
          {
            list.map(item => {
              return <tr onClick={()=>{
                <Popup>
                  <div>popup</div>
                </Popup>
              }}>
              <td>
                {item.name}
              </td>
              <td>
                {item.country}
              </td>
              <td>
                {item.type}
              </td>
            </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
