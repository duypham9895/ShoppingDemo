import React from 'react';
import { connect } from 'react-redux';

import { changeData, requestDataLogin } from '../../actions/AuthorizeAction.jsx';

class LoginForm extends React.Component {

	inputChange(event){
		this.props.dispatch(changeData({
			...this.props.form.data, [event.target.name]: event.target.value,	
		}))
	}

	login(){
		this.props.dispatch(requestDataLogin(this.props.form.data, this.props.history));
	}

	render(){
		return(
			<div>
				<nav className='uk-padding-small'></nav>
				<div>
					<div className='uk-width-1-2'>
						<div className='uk-margin form-control'>
							<input onChange={this.inputChange.bind(this)} name='username' id='username'
							value={ this.props.form.data.username }
							className='uk-input' required='required' type='text' />
							<label htmlFor='username' >Username</label>
						</div>
						<div className='uk-margin form-control uk-margin-top'>
							<input onChange={this.inputChange.bind(this)} name='password' id='password'
							value={ this.props.form.data.password }
							className='uk-input' required='required' type='password' />
							<label htmlFor='password' >Password</label>
						</div>
						<div className='uk-grid-collapse' uk-grid='' >
							<div className='uk-width-4-5'>
								<a>Forget password</a>
								<br/>
								<a>Create new account</a>
							</div>
							<div className='uk-width-1-5'>
								<button onClick={this.login.bind(this)} className='uk-button uk-button-primary'>Login</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		form: store.Login.form,
	}
}

export default connect(mapStateToProps)(LoginForm);