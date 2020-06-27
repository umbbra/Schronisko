import React from 'react';
import {Link} from "react-router-dom";


const animals = ["Mike", "Zuko", "Caty"]
const AnimalsList = () => {

  const list = animals.map(anim =>(
    <li key={anim}>
      <Link to={`/animal/${anim}`}>{anim}</Link>
    </li>
  ))
 return ( 
  <div className="animals">
    <h3>Nasi pupile</h3>
    <div className="animals-list">
      {list}
    </div>
  </div>
  );
}
 
export default AnimalsList;