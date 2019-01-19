import React, { Component } from 'react';
import {Route} from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import ShoppingPage from './pages/ShoppingPage.jsx';
import AuthorizePage from './pages/AuthorizePage.jsx';



class App extends Component {
  render() {
    return (
        <div>
          <Route path='/shopping' render={(props) => <ShoppingPage {...props}  />} />
          <Route path='/login' render= {(props) => <AuthorizePage {...props}  />}  />
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps)(App));
