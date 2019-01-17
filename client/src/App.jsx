import React, { Component } from 'react';
import {Route} from 'react-router';
import { connect } from 'react-redux';

// import ShoppingPage from './pages/ShoppingPage.jsx';
// import AuthorizePage from './pages/AuthorizePage.jsx';
import { changeData, changeRole } from './actions/UserAction.jsx';
import UserManagingPage from './pages/UserManagingPage.jsx';



class App extends Component {
// <div>
//   <Route path='/' exact render={ (props) => <ShoppingPage auth={state.auth} {...props}/> }/>
//   <Route path='/login' exact render = { (props) => <AuthorizePage {...props} />} />
// </div>
  render() {
    console.log(this.props);
    return (
        <div>
          <UserManagingPage />
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(store.User.list);
  return {
    list: store.User.list,
  }
}

export default connect(mapStateToProps)(App);
