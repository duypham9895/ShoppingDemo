import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import ShoppingPage from './pages/ShoppingPage.jsx';
import AuthorizePage from './pages/AuthorizePage.jsx';


class App extends Component {
  render() {
    return (
        <div>
              <Route path='/shopping' render={(props) => <ShoppingPage {...props}  />} />
              <Route path='/user' render= {(props) => <AuthorizePage {...props}  />} />
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps)(App));
