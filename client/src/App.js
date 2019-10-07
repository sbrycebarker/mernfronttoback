import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () =>
<Provider store={store}>
  <Router>
    <Fragment>
      
      <Navbar />
      <Route exact path="/" component={ Landing }/>
      <section className="container">
        <Switch>
          <Route exact path='/Register' component={Register}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </section>
    </Fragment>
  </Router>
</Provider>


export default App;
