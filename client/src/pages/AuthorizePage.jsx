import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from '../components/authorize/LoginForm.jsx';
import ForgotPasswordForm from '../components/authorize/ForgotPasswordForm.jsx';

class AuthorizePage extends React.Component{
	render(){
		return(
			<div>
				<LoginForm {...this.props} />
				<ForgotPasswordForm {...this.props} />
			</div>
		)
	}
}

export default withRouter(AuthorizePage);