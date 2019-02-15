import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Calendar from '../Calendar.jsx';
import { validInfo, changeUserInfo } from '../../actions/CreateAction.jsx';

const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
				"October", "November", "December" ];
class CreateForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isHidden: true,
			message: {
				username: '',
				password: '',
				confirmPassword: '',
				birthday: '',
				email: '',
				phone: '',
			},
			result: true,
		}
	}

	calendar(){
		this.setState({
			isHidden: !this.state.isHidden
		})
	}

	onChangeInput(event){
		const newUser = {...this.props.user, 
			[event.target.name]: event.target.value};
		this.props.dispatch(changeUserInfo(newUser));
	}

	changeDate(date) {
		const newUser = {
			...this.props.user,
			birthday: date,
		}; 
		this.props.dispatch(changeUserInfo(newUser));
	}

	async handleSetStateUsername(oldMessage, oldResult){
		await this.setState({
			message: {...this.state.message, username: oldMessage},
			result: {...this.state.result, oldResult},
		})
	}

	async fetchUsername(){
		var user = {...this.props.user};
		var result = {...this.state.result};

		var message = '';
		var rs = false;

		await fetch('http://localhost:8080/user/get?field=username&value='+user.username, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(
				(res) => {
					if( res.headers.get('Content-Type') === null ){
						rs = true;
					} else {
					}
				},
				(err) => console.log(err),
		)
		.then(
			(res) => {
				if( rs === false){
					message = '(*) Your usename has already exsited.';
					result = false;
					this.handleSetStateUsername(message,result);
				} else{
					message = '';
					result = true;
					this.handleSetStateUsername(message,result);
				}
			}
		);
	}

	async handleSetStateEmail(oldMessage, oldResult){
		await this.setState({
			message: {...this.state.message, email: oldMessage},
			result: {...this.state.result, oldResult},
		})
	}

	async fetchEmail(){
		var user = {...this.props.user};
		var result = {...this.state.result};

		var message = '';
		var rs = true;

		await fetch('http://localhost:8080/user/get?field=email&value='+user.email, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(
				(res) => {
					if( res.headers.get('Content-Type') === null ){
						rs = false;
					} else {
					}
				},
				(err) => console.log(err),
		)
		.then((res) => {
			if( rs === true ){
				message = '(*) Your email has already exsited.';
				result = false;
				this.handleSetStateEmail(message,result);
			} else {
				message = '';
				result = true;
				this.handleSetStateEmail(message,result);
			}
		});
	}

	async handleSetStatePhone(oldMessage, oldResult){
		await this.setState({
			message: {...this.state.message, phone: oldMessage},
			result: {...this.state.result, oldResult},
		})
	}

	async fetchPhone(){
		var user = {...this.props.user};
		var result = true;

		var message = '';
		var rs = true;

		await fetch('http://localhost:8080/user/get?field=phone&value='+user.phone, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then((res) => {
					if( res.headers.get('Content-Type') === null ){
						rs = false;
					} else {

					}
				},
				(err) => console.log(err)
		)
		.then((res) => {
			console.log('2');
			if( rs === true ){
				message = '(*) Your phone has already exsited.';
				result = false;
				this.handleSetStatePhone(message,result);
			} else {
				message = '';
				result = true;
				this.handleSetStatePhone(message,result);
			}
		});
	}

	async handleValidInfo(){
		var user = {...this.props.user};
		var message = {...this.state.message}
		var result = {...this.state.result};

		var temp = user.username;

		if(temp.length < 4){
			message.username = '(*) Your username length must be longer than 7.';
			result = false;
		} else {
			if( temp.match(/\W/) != null ){
				message.username = '(*) Your username must not contain special character.';
				result = false;
			}
			else{
				await this.fetchUsername();
				result = this.state.result;
				message.username = this.state.message.username;
			}
		}

		temp = user.password;

		if( temp.length < 8 ){
			message.password = '(*) Your password length must be longer than 7.';
			result = false;
		} else {
			if( temp !== user.confirmPassword ){
				message.password = '(*) Your password and Confirm Password must be matched.';
				message.confirmPassword = '(*) Your password and Confirm Password must be matched.';
				result = false;
			} else {
				message.password = '';
				message.confirmPassword = '';
				result = true;
			}
		}


		var now = new Date().getFullYear();

		if ( user.birthday === null){
			message.birthday = '(*) Your birthday must not be empty.';
			result = false;
		} else {
			if( ( now - user.birthday.getFullYear() ) < 18){
				message.birthday = '(*) You must be 18 or older.';
				result = false;
			} else {
				message.birthday = '';
				result = true;
			}
		}

		var re = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
		
		if(!user.email.match(re)) {
			message.email = '(*) Your email must be email type.';
			result = false;
		} else {
			await this.fetchEmail();
			result = this.state.result;
			message.email = this.state.message.email;
		}

		if(user.phone.length < 10 || ( user.phone.match(/\D/) != null ) ){
			message.phone = '(*) Your phone must be phone type.';
			result = false;
		} else {
			await this.fetchPhone();
			result = this.state.result;
			message.phone = this.state.message.phone;
		}
		console.log('1');

		this.setState({
			message: message,
			result: result,
		})

		return result;
	}

	async test(){
		var temp = await this.handleValidInfo();
		console.log('ket qua ',temp);
		if(temp.oldResult === true){
			console.log('test true');
		}
		else{
			console.log('test false');
		}
	}

	render(){
		// console.log(this.handleValidInfo());
		const message = this.state.message;
		// console.log(message.username);
		const user = this.props.user;
		return(
			<div>
				<div className='uk-padding uk-position-center boxshadow flow-auto' style={{width: '45%'}}>

					<h2 className='uk-text-center uk-text-bold uk-text-primary'>Sign Up</h2>
					<p className={
							message.username === '' ? 'hidden' : 'uk-text-danger'
						}>{message.username}</p>
					<div className='uk-margin-medium form-control '>
						<input onChange={this.onChangeInput.bind(this)} name='username' id='username'
						className='uk-input' required='required' type='text' />
						<label htmlFor='username' >Username</label>
					</div>

					<p className={
							message.password==='' ? 'hidden' : 'uk-text-danger'
						}>{message.password}</p>
					<div className='uk-margin-medium form-control '>
						
						<input onChange={this.onChangeInput.bind(this)} name='password' id='password'
						className='uk-input' required='required' type='password' />
						<label htmlFor='password' >Password</label>
					</div>

					<p className={
							message.confirmPassword==='' ? 'hidden' : 'uk-text-danger'
						}>{message.confirmPassword}</p>
					<div className='uk-margin-bottom form-control '>
						
						<input onChange={this.onChangeInput.bind(this)} name='confirmPassword' id='confirmPassword'
						className='uk-input' required='required' type='password' />
						<label htmlFor='confirmPassword' >Confirm Password</label>
					</div>
					<p className={
									message.birthday==='' ? 'hidden' : 'uk-text-danger'
								}>{message.birthday}</p>
					{
						user.birthday===null ? 
						(
							
							<div className='uk-margin-small uk-position-relative'>
								
								<label className='custom-button-label'>Birthday</label>
								<br/>
								<div className='custom-button' onClick={this.calendar.bind(this)}></div>
								<div className={
									this.state.isHidden===false ? 'hiddenCalendar hiddenCalendar-active' : 'hiddenCalendar'
								} >
									<Calendar dataGetter={ this.changeDate.bind(this) }/>
								</div>
							</div>
						) : 
						(
							<div className='uk-margin-small uk-position-relative '>
								
								<label className='custom-button-label custom-button-label-active'>Birthday</label>
								<br/>
								<div className='custom-button custom-button-active' onClick={this.calendar.bind(this)}>{
									monthNames[user.birthday.getMonth()]+' '+user.birthday.getDate()+' '+ user.birthday.getFullYear()
								}</div>
								<div className={
									this.state.isHidden===false ? 'hiddenCalendar hiddenCalendar-active' : 'hiddenCalendar'
								} >
									<Calendar dataGetter={ this.changeDate.bind(this) }/>
								</div>
							</div>
						)
					}
					<p className={
							message.email==='' ? 'hidden' : 'uk-text-danger'
						}>{message.email}</p>
					<div className='uk-margin-medium form-control '>
						
						<input onChange={this.onChangeInput.bind(this)} name='email' id='email'
						className='uk-input' required='required' type='text' />
						<label htmlFor='email' >Email</label>
					</div>

					<p className={
							message.phone==='' ? 'hidden' : 'uk-text-danger'
						}>{message.phone}</p>
					<div className='uk-margin-medium form-control '>
						
						<input onChange={this.onChangeInput.bind(this)} name='phone' id='phone'
						className='uk-input' required='required' type='text' />
						<label htmlFor='phone' >Phone</label>
					</div>

					<button onClick={this.test.bind(this)} className='uk-button uk-button-primary'>Submit</button>
				</div>
			</div>
		)
	}
}



const mapStateToProps = (store) => {
	return{
		user: store.CreateUser.user,
		message: store.CreateUser.message,
		result: store.CreateUser.result,
	}
}

export default withRouter(connect(mapStateToProps)(CreateForm));