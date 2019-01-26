import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Calendar from '../Calendar.jsx';
import { changeUserInfo } from '../../actions/CreateAction.jsx';

const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
				"October", "November", "December" ];
class CreateForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isHidden: true
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

	render(){
		const user = this.props.user;
		return(
			<div>
			<div className='uk-padding uk-position-center boxshadow flow-auto' style={{width: '45%'}}>

				<h2 className='uk-text-center uk-text-bold uk-text-primary'>Sign Up</h2>
				<div className='uk-margin-medium form-control '>
					<input onChange={this.onChangeInput.bind(this)} name='username' id='username'
					className='uk-input' required='required' type='text' />
					<label htmlFor='username' >Username</label>
				</div>

				<div className='uk-margin-medium form-control '>
					<input onChange={this.onChangeInput.bind(this)} name='password' id='password'
					className='uk-input' required='required' type='password' />
					<label htmlFor='password' >Password</label>
				</div>

				<div className='uk-margin-bottom form-control '>
					<input onChange={this.onChangeInput.bind(this)} name='confirmPassword' id='confirmPassword'
					className='uk-input' required='required' type='password' />
					<label htmlFor='confirmPassword' >Confirm Password</label>
				</div>
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
				<div className='uk-margin-medium form-control '>
					<input onChange={this.onChangeInput.bind(this)} name='email' id='email'
					className='uk-input' required='required' type='text' />
					<label htmlFor='email' >Email</label>
				</div>

				<div className='uk-margin-medium form-control '>
					<input onChange={this.onChangeInput.bind(this)} name='phone' id='phone'
					className='uk-input' required='required' type='text' />
					<label htmlFor='phone' >Phone</label>
				</div>
			</div>
			</div>
		)
	}
}



const mapStateToProps = (store) => {
	return{
		user: store.CreateUser.user,
	}
}

export default withRouter(connect(mapStateToProps)(CreateForm));