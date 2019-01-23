import React from 'react';
import { withRouter, Route , Switch } from 'react-router-dom';
// import {Route} from 'react-router';

import LoginForm from '../components/authorize/LoginForm.jsx';
import ForgotPasswordForm from '../components/authorize/ForgotPasswordForm.jsx';
import CreateForm from '../components/authorize/CreateForm.jsx';

class AuthorizePage extends React.Component{
	render(){
		return(
			<div>
				<Switch>
					<Route path='/user/login' render={(props) => <LoginForm {...props} />} />
					<Route path='/user/forgot' render={(props) => <ForgotPasswordForm {...props} />} />
					<Route path='/user/create' render={(props) => <CreateForm {...props} />} />
				</Switch>
			</div>
		)
	}
}

export default withRouter(AuthorizePage);