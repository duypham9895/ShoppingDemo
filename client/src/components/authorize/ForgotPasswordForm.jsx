import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { changeInput, forgotPassword, submitCode,
	updatePassword, changeCode, resetAll,
	setMessage } from '../../actions/ForgotPasswordAction.jsx';

class ForgotPasswordForm extends React.Component{
	componentWillMount(){
		this.props.dispatch(resetAll());
	}

	changeInput(event){
		this.props.dispatch(changeInput(event.target.name, event.target.value));

	}

	submitUsername(){
		this.props.dispatch(forgotPassword(this.props.username));
	}

	confirmCode(event){
		this.props.dispatch(changeCode(event.target.value));
		if(event.target.value === this.props.code){
			this.props.dispatch(submitCode());
		}
	}

	updateModel(){
		if(this.props.newPassword === this.props.confirmPassword){
			var newModel = {...this.props.model, password: this.props.newPassword};

			this.props.dispatch(updatePassword(newModel));
			this.props.history.push('/user/login');
		}
		this.props.dispatch(setMessage('Password does not match'));

	}



	render(){
		var dom;

		switch(this.props.stage){
			case 1:{
				dom = (
					<div className='center'>
					{
						this.props.fetching === true ? (<div className='loading'></div>) : null
					}
					<p className={
						this.props.message === null ? 'uk-dangerous hidden notice' : ' notice uk-dangerous'
					}>{this.props.message}</p>
						<label>Username</label>
						<input value={this.props.username} name='username' onChange={this.changeInput.bind(this)} className='uk-input' />

						<button onClick={this.submitUsername.bind(this)} className='uk-button uk-margin uk-button-primary' >Submit</button>
					</div>
				)
				break;
			}
			case 2:{
				dom = (
					<div className='center'>
						<label>Your code</label>
						<input value={this.props.confirmCode} name='code' className='uk-input' onChange={this.confirmCode.bind(this)} />
					</div>
				)
				break;
			}

			case 3:{
				dom = (
					<div className='center'>
						<p className={
							this.props.message === null ? 'hidden notice' : 'notice'
						}>{this.props.message}</p>
						<label>New Password</label>
						<input type='password' value={this.props.newPassword} className='uk-input' name='newPassword' onChange={this.changeInput.bind(this)} />
						<label>Confirm New Password</label>
						<input type='password' value={this.props.confirmPassword} name='confirmPassword' onChange={this.changeInput.bind(this)} className='uk-input' />

						<button onClick={this.updateModel.bind(this)} className='uk-button uk-margin uk-button-primary' >Submit</button>
					</div>
				)
				break;
			}

			default:{
				return;
			}
		}
		return dom;
	}
}

const mapStateToProps = (store) => {
	return{
		username: store.ForgotPassword.form.data.username,
		code: store.ForgotPassword.code,
		stage: store.ForgotPassword.stage,
		newPassword: store.ForgotPassword.form.data.newPassword,
		confirmPassword: store.ForgotPassword.form.data.confirmPassword,
		model: store.ForgotPassword.form.model,
		confirmCode: store.ForgotPassword.form.confirmCode,
		message: store.ForgotPassword.message,
		fetching: store.ForgotPassword.fetching,
	}
}

export default withRouter(connect(mapStateToProps)(ForgotPasswordForm));