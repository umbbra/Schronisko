import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AnimalsList from '../pages/AnimalsList';
import Animal from '../pages/Animal';
import Documents from '../pages/Documents';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Login from '../pages/Login';
import Error from '../pages/Error';

const Page = () => {
 return (
  <Switch>
   <Route path='/' exact component={HomePage} />
   <Route path='/animals' component={AnimalsList} />
   <Route path='/animal/:id' component={Animal} />
   <Route path='/documents' component={Documents} />
   <Route path='/event' component={Events} />
   <Route path='/contact' component={Contact} />
   <Route path='/admin' component={Admin} />
   <Route path='/login' component={Login} />
   <Route component={Error} />
  </Switch>
 );
}

export default Page;