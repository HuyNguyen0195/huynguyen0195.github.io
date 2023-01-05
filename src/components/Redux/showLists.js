import React from "react";

const ShowLists =({lists, year, make, model, price})=>{
    return lists
    .filter(json=>{return (make !== '' ? json.make === make : json ) })
    .filter(json=>{return (model !== '' ? json.model === model : json ) })
    .filter(json=>{return (year !== '' ? json.year === year : json ) })
    .filter(json=>{return (price !== '' ? json.price <= price : json ) })
    .map((json)=>(
          <tr key={json.id}>
          <td>{json.year}</td>
          <td>{json.make}</td>
          <td>{json.model}</td>
          <td>{json.horsepower}</td>
          <td>{json.price}</td>
          </tr>)
          )
  }

export default ShowLists;