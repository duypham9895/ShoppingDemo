import React from 'react';
import LoginForm from '../components/authorize/LoginForm.jsx';
import { withRouter } from 'react-router-dom';

class AuthorizePage extends React.Component{
	render(){
		return(
			<div>
				<LoginForm {...this.props} />
			</div>
		)
	}
}

export default withRouter(AuthorizePage);