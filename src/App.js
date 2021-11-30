import React from 'react';

import Home from './Home';
import PhoneToken from './auth/PhoneToken';
import MoreFriends from './userView/MoreFriends';
import Header from './building-blocks/header';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div className="container" style={{ paddingTop: 10 }}>

      <Router>
        <Header beanId="header1" />
        <Switch>
          < Route exact path="/" component={Home} />
          < Route path="/phone-token" component={PhoneToken} />
          < Route path="/more-pals" render={() => <MoreFriends data={store.updates} beanId="moreFriends1"/>} />
          < Route path="*" component={Home} />
        </Switch>
      </Router>
    </div >
  );
};

export default App;