import React, { Component } from 'react';
import Product from './components/Product.jsx';
import AddProduct from './components/AddProduct.jsx';
import Login from './components/Login.jsx';
import {Route} from 'react-router';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      product:{
        list: [
          {
            id: '',
            name: '',
            description: '',
            images: [],
            price: 0
          }
        ],
      },
      isHidden: false,
      isHiddenForm: true
    };

  }

  componentWillMount(){
    fetch('http://localhost:8080/product/all',{
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    .then((res) => res.json())
    .then((res) => {this.setState({
        product: {...this.state.product, list: res },
      });
    });
  }

  isHiddenProduct(){
    this.setState({
      product: {...this.state.product, isHidden: true}
    })
  }

  render() {
    
    return (
      <div className='uk-container'>
        <div> <input /> </div>
        <div uk-grid=''>
          <div className='uk-width-1-5'>Sidebar</div>
          <div className='uk-width-3-5'>
            <Route path='/login' exact component={Login}/>
            <Route path='/product' exact component={Product}/>
          </div>
          <div className='uk-width-1-5'>UserInfo</div>
        </div>
      </div>
    );
  }
}

export default App;
