import React from 'react';

import Calendar from '../Calendar.jsx';
const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September",
				"October", "November", "December" ];

class Test extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			birthday:{
				text1: null,
				text2: null,
			},
			calendar:{
				active: 'hiddenCalendar hiddenCalendar-active',
				hidden: 'hiddenCalendar',
			},
			isHidden: true,
			isHidden2: true,
		}
	}

	calendar(){
		this.setState({
			isHidden: !this.state.isHidden
		})
	}

	changeDate(date){
		console.log('1');
		if(date === null){
			return;
		}

		console.log('2');
		this.setState({
			birthday: {
				...this.state.birthday,
				text1: date
			},
			isHidden: !this.state.isHidden,
		})
	}


	calendar2(){
		this.setState({
			isHidden2: !this.state.isHidden2
		})
	}

	changeDate2(date){
		console.log('1');
		if(date === null){
			return;
		}

		console.log('2');
		this.setState({
			birthday: {
				...this.state.birthday,
				text2: date
			},
			isHidden2: !this.state.isHidden2,
		})
	}



	render(){
		const activeCalendar = this.state.calendar.active;
		const hiddenCalendar = this.state.calendar.hidden;
		const birthday = this.state.birthday;
		// console.log('text1 ',monthNames[birthday.text1.getMonth()]);
		return(
			<div>

				<div className='uk-padding uk-position-center boxshadow flow-auto' style={{width: '45%'}}>
					{
						birthday.text1 === null ?
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
						)
						:
						(
							<div className='uk-margin-small uk-position-relative '>
									
								<label className='custom-button-label custom-button-label-active'>Birthday</label>
								<br/>
								<div className='custom-button custom-button-active' onClick={this.calendar.bind(this)}>{
									monthNames[birthday.text1.getMonth()]+' '+birthday.text1.getDate()+' '+ birthday.text1.getFullYear()
								}</div>
								<div className={
									this.state.isHidden===false ? activeCalendar : hiddenCalendar 
								} >
									<Calendar {...this.props} dataGetter={ this.changeDate.bind(this) }/>
								</div>
							</div>
						)
					}

					{
						birthday.text2 === null ?
						(
							<div className='uk-margin-small uk-position-relative'>
									
								<label className='custom-button-label'>Birthday</label>
								<br/>
								<div className='custom-button' onClick={this.calendar2.bind(this)}></div>
								<div className={
									this.state.isHidden2===false ? activeCalendar : hiddenCalendar 
								} >
									<Calendar {...this.props} dataGetter={ this.changeDate2.bind(this) }/>
								</div>
							</div>
						)
						:
						(
							<div className='uk-margin-small uk-position-relative '>
									
								<label className='custom-button-label custom-button-label-active'>Birthday</label>
								<br/>
								<div className='custom-button custom-button-active' onClick={this.calendar2.bind(this)}>{
									monthNames[birthday.text2.getMonth()]+' '+birthday.text2.getDate()+' '+ birthday.text2.getFullYear()
								}</div>
								<div className={
									this.state.isHidden2===false ? activeCalendar : hiddenCalendar 
								} >
									<Calendar {...this.props} dataGetter={ this.changeDate2.bind(this) }/>
								</div>
							</div>
						)
					}
				</div>


			</div>
		)
	}
}

export default Test;