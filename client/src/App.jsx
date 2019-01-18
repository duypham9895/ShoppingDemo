import React, { Component } from 'react';
import {Route} from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import ShoppingPage from './pages/ShoppingPage.jsx';
import AuthorizePage from './pages/AuthorizePage.jsx';
import { changeData, changeRole } from './actions/UserAction.jsx';
import UserManagingPage from './pages/UserManagingPage.jsx';



class App extends Component {
// <div>
//   <Route path='/' exact render={ (props) => <ShoppingPage auth={state.auth} {...props}/> }/>
//   <Route path='/login' exact render = { (props) => <AuthorizePage {...props} />} />
// </div>
  render() {
    return (
        <div>
          <Route path='/shopping' render={(props) => <ShoppingPage {...props} location={{pathname: '/shopping'}} />} />
          <Route path='/login' render= {(props) => <AuthorizePage {...props} location={{pathname: '/login'}} />}  />
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
  }
}

export default withRouter(connect(mapStateToProps)(App));
