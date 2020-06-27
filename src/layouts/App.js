import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import '../styles/App.css';

import Footer from './Footer';
import Header from './Header';
import Page from './Page';
import Navigation from './Navigation';

class App extends React.Component{
  render(){
    return (
      <Router>
      <div className="app">
        <header className="app-header">
        {<Header />}
        </header>
        <main className="app-main">
          <aside className="aside">
            {<Navigation />}
          </aside>
          <section className="page">
            {<Page />}
          </section>
        </main>
        <footer className="app-footer">
          {<Footer />}
        </footer>
      </div>
      </Router>
    );
  }
}

export default App;
