import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import Sidebar from '../components/manage/Sidebar.jsx';
import Product from '../components/manage/Product.jsx';

class ManageProductPage extends React.Component{

	componentWillMount(){
		const user = this.props.user;
		if(user === null){
			this.props.history.push('/user/login');
		}
	}

	render(){
		const user = this.props.user;

		if(user === null || user.role !== 'Admin'){
			return(
				<div>not</div>
			)
		}
		return(
			<div uk-grid=''>
				<div className='uk-width-1-5 MP-category'>
					<Sidebar />
				</div>

				<div className='uk-width-4-5 uk-padding-small uk-padding-remove-top uk-padding-remove-right overflow-auto'>
					<div className='uk-column-1-2 uk-background-default' style={{zIndex: '980', }} uk-sticky='bottom: #offset'>
						<div className='uk-margin'>
						    <div className='uk-search uk-search-default uk-width-1-1'>
						        <a href="" className='uk-search-icon-flip' uk-search-icon=''></a>
						        <input className=' uk-input uk-search-input' placeholder='Search...' />
						    </div>
						</div>

						<div>Test</div>

					</div>

					<Product />

					<div className='icon fixed-bottom-right'>
						<i className='fas fa-plus fa-lg '></i>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return{
		user: store.Login.user,
	}
}

export default withRouter(connect(mapStateToProps)(ManageProductPage));