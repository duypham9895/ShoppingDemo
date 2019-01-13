import React, { Component } from 'react';
import ShoppingPage from './pages/ShoppingPage.jsx';
import AddProduct from './components/AddProduct.jsx';
import {Route} from 'react-router';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{
        userData: {
          username: '',
          password: '',
        },
        isLogin: false,
      }
    }
  }

  

  render() {
    
    return (
      <div>
        <div> <input /> </div>
        <div uk-grid=''>
          <div className='uk-width-1-5'>Sidebar</div>
          <div className='uk-width-3-5'>
            <Route path='/' exact component={ShoppingPage}/>
          </div>
          <div className='uk-width-1-5'>UserInfo</div>
        </div>
      </div>
    );
  }
}

export default App;
