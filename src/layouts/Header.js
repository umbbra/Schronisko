import React from 'react';
import { withRouter } from 'react-router-dom';
import header1 from '../images/header1.jpg';
import header2 from '../images/header2.jpg';
import header3 from '../images/header3.jpg';
import "../styles/Header.css";

const Header = () => {
  const images = [header1, header2, header3];
  const index = Math.floor(Math.random() * 3);
  const img  = images[index];
 return ( 
  <div className="header-container">
    {/* <Switch>
    <Route path="/" render={()=> (
      <img className="header-img" src={header3} alt="animal" />
    )} />
    <Route path="/documents" render={()=> (
      <img className="header-img" src={header1} alt="dog" />
    )} />
    <Route path="/contact" render={()=> (
      <img className="header-img" src={header2} alt="dog" />
    )} />
    <Route path="/animals" render={()=> (
      <img className="header-img" src={header3} alt="cat" />
    )} />
    <Route render={()=> (
      <img className="header-img" src={header1} alt="cat" />
    )} />
    </Switch> */}
    <img className="header-img" src={img} alt="cat" />
    <p className="header-title">Schronisko dla zwierząt <br />Wesoła Łapka</p>
  </div>
  );
}
 
export default withRouter(Header);