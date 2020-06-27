import React from 'react';
import {NavLink} from 'react-router-dom';

import "../styles/Navigation.css";

const list =[
  {name: "Home", path: "/", exact:true},
  {name: "Nasi podopieczni", path: "/animals"},
  {name: "Dokumenty", path: "/documents"},
  {name: "Wydarzenia", path: "/event"},
  {name: "Kontakt", path: "/contact"},
  {name: "Panel admina", path: "/admin"},
];

const Navigation = () => {
  const menu = list.map(item => (
  <li key={item.name} className="nav-item">
    <NavLink exact={item.exact} className="nav-link" to={item.path}>{item.name}</NavLink>
  </li>
  ))
 return ( 
  <nav className="nav">
    <ul className="nav-list">
      {menu}
    </ul>
  </nav> 
  );
}
 
export default Navigation;