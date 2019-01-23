import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, } from 'react-router-dom';

import { changeData, requestDataLogin } from '../../actions/LoginAction.jsx';


class LoginForm extends React.Component {

	inputChange(event){
		this.props.dispatch(changeData({
			...this.props.form.data, [event.target.name]: event.target.value,	
		}))
	}

	login(){
		this.props.dispatch(requestDataLogin(this.props.form.data, this.props.history));
	}

	forgot(){
		this.props.history.push('/user/forgot');
	}

	create(){
		this.props.history.push('/user/create');
	}

	render(){
		return(
			<div className='uk-padding uk-position-center boxshadow' style={{width: '50%'}}>
				<h2 className='uk-text-center uk-text-bold uk-text-primary'>Sign In</h2>
				<nav className='uk-padding-small'></nav>
				<div >
					<div className='uk-width-1-1'>
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
								<a onClick={this.forgot.bind(this)}>Forget password</a>
								<br/>
								<a onClick={this.create.bind(this)}>Create new account</a>
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

export default withRouter(connect(mapStateToProps)(LoginForm));