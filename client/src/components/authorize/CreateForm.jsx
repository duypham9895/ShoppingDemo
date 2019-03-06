import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Calendar from '../Calendar.jsx';
import { validInfo, changeUserInfo, changeStatusCalendar, createAccount } from '../../actions/CreateAction.jsx';

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
			calendar:{
				active: 'hiddenCalendar hiddenCalendar-active',
				hidden: 'hiddenCalendar',
			},
			ok: false
		}
	}

	handleSetStateHidden(){
		this.setState({
			isHidden: !this.state.isHidden
		})
	}

	changeStatusCalendar(){
		var calendar = {
			active: 'hiddenCalendar hiddenCalendar-active',
			hidden: 'hiddenCalendar',
		};

		this.props.dispatch(changeStatusCalendar(calendar));	
	}

	async calendar(){
		await this.handleSetStateHidden(); 
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
		// console.log('in create form ',typeof date);
		if(date != null){
			this.setState({
				isHidden: !this.state.isHidden,
			})
		}
		this.props.dispatch(changeUserInfo(newUser));
	}

	fetchUsername(){
		var user = {...this.props.user};
		var result = {...this.state.result};

		var message = '';
		var rs = false;

		return fetch('http://localhost:8080/user/get?field=username&value='+user.username, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(
				(res) => {
					if( res.headers.get('Content-Type') === null ){
						return true;
					} 
					return false;
				},
				(err) => console.log(err),
		)
	}

	fetchEmail(){
		var user = {...this.props.user};
		var result = {...this.state.result};

		var message = '';
		var rs = true;

		return fetch('http://localhost:8080/user/get?field=email&value='+user.email, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		.then(
				(res) => {
					if( res.headers.get('Content-Type') === null ){
						return true;
					} 
					return false;
				},
				(err) => console.log(err),
		);
	}

	fetchPhone(){
		var user = {...this.props.user};
		var result = true;

		var message = '';
		var rs = true;

		return fetch('http://localhost:8080/user/get?field=phone&value='+user.phone, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(
				(res) => {
					if( res.headers.get('Content-Type') === null ){
						return true;
					} 
					return false;
				},
				(err) => console.log(err),
		);
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
				var resultUsername = await this.fetchUsername();
				

				if(resultUsername === false){
					message.username = '(*) Your username has already exsited.';
					result = false;
				} else{
					message.username = "";
					result = true;
				}
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
		if( ( now - user.birthday.getFullYear() ) < 18){
			message.birthday = '(*) You must be 18 or older.';
			result = false;
		} else {
			message.birthday = '';
			result = true;
		}

		var re = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
		
		if(!user.email.match(re)) {
			message.email = '(*) Your email must be email type.';
			result = false;
		} else {
			var resultEmail = await this.fetchEmail();
				

			if(resultEmail === false){
				message.email = '(*) Your email has already exsited.';
				result = false;
			} else{
				message.email = '';
				result = true;
			}
		}

		if(user.phone.length < 10 || ( user.phone.match(/\D/) != null ) ){
			message.phone = '(*) Your phone must be phone type.';
			result = false;
		} else {
			var resultPhone = await this.fetchPhone();
				

			if(resultPhone === false){
				message.phone = '(*) Your phone has already exsited.';
				result = false;
			} else{
				message.phone = '';
				result = true;
			}
		}

		for( var data in message){
			if(message[data] !== ''){
				result = false;
			} else {
				result = true;
			}
			
		}

		this.setState({
			message: message,
			result: result,
		})

		return result;
	}

	async buttonCreateAccount(){
		console.log('create account');
		var temp = await this.handleValidInfo();
		var message = {...this.state.message};
		
		if(temp === true ){
			this.setState({		
				ok: true,
			});
			this.props.dispatch(createAccount(this.props.user));
			setTimeout(() => {
				this.props.history.push('/user/login');
			}, 3000);
		}
	}


	render(){
		const message = this.state.message;
		const activeCalendar = this.state.calendar.active;
		const hiddenCalendar = this.state.calendar.hidden;
		const user = this.props.user;
		const now = new Date();
		if(this.state.ok === true){
			return (
				<h1>success</h1>
			)
		}

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
							message.birthday === '' ? 'hidden' : 'uk-text-danger'
						}>{message.birthday}</p>
					{
						user.birthday === now ? 
						(
							
							<div className='uk-margin-small uk-position-relative'>
								
								<label className='custom-button-label'>Birthday</label>
								<br/>
								<div className='custom-button' onClick={this.calendar.bind(this)}></div>
								<div className={
									this.state.isHidden===false ? activeCalendar : hiddenCalendar 
								} >
									<Calendar {...this.props} dataGetter={ this.changeDate.bind(this) }/>
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
									this.state.isHidden===false ? activeCalendar : hiddenCalendar 
								} >
									<Calendar {...this.props} dataGetter={ this.changeDate.bind(this) }/>
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

					<button onClick={this.buttonCreateAccount.bind(this)} className='uk-button uk-button-primary'>Submit</button>
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
		calendar: store.CreateUser.calendar,
	}
}

export default withRouter(connect(mapStateToProps)(CreateForm));