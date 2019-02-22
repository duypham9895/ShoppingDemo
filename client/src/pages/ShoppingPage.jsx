import React from 'react';
import { withRouter, Route , Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class ShoppingPage extends React.Component {
	render(){
		console.log('rendering shopping page');
		return(	
			<div>
				<nav className=''>
					<div className='uk-grid-collapse' uk-grid=''>
						<div className='uk-width-1-5 sp-banner'>Banner</div>
						<div className='uk-width-2-5 sp-search'>Search</div>
						<div className='uk-width-1-5 sp-login'>Login</div>
						<div className='uk-width-1-5 sp-cart'>Cart</div>
					</div>
				</nav>
				<div className='uk-grid-collapse sp-div-2' uk-grid=''>
					<div className='uk-width-1-5 sp-category'>
						category
					</div>
					<div className='uk-width-4-5 sp-advertisement'>
						advertisement
					</div>
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