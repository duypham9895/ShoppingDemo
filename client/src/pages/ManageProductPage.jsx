import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

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
			<div>
				<p>Hello admin</p>
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