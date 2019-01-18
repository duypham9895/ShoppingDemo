import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ShoppingPage extends React.Component {
	render(){
		console.log('rendering shopping page');
		return(	
			<div>
				<nav className='uk-padding-small'>
					<div className='uk-grid-collapse' uk-grid=''>
						<div className='uk-width-1-5'>Banner</div>
						<div className='uk-width-3-5'>Nav</div>
						<div className='uk-width-1-5'>
						</div>
					</div>
				</nav>
				<div className='uk-grid-collapse uk-padding-small' uk-grid=''>
					<div className='uk-width-1-5'>
						1
					</div>
					<div className='uk-width-4-5'>
						4
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