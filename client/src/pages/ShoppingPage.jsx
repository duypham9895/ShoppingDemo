import React from 'react';
import { withRouter, Route , Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from '../components/nav/Navbar.jsx';

class ShoppingPage extends React.Component {
	render(){
		console.log('rendering shopping page');
		return(	
			<div>
				<Navbar />
				<div className='uk-grid-collapse sp-div-2' uk-grid=''>
					<Link to='/manage/product'>Product</Link>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	console.log(store);
	return{

	}
}

export default withRouter(connect(mapStateToProps)(ShoppingPage));