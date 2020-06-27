import React from 'react';
import {Link} from "react-router-dom";
import Anim from "../components/Anim";

const Animal = ({match}) => {
 return ( 
  <>
  <div> Strona produktu</div>
  <Anim id={match.params.id}/>
  <Link to="/animals">Powrót do listy produktów</Link>
  </>
  );
}
 
export default Animal;