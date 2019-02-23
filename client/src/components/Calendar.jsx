import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeStatusCalendar } from '../actions/CreateAction.jsx';

let dayAndYear = [ 0, 1500, 2, 1600, 1, 1700, 6, 1800, 4, 1900, 2, 2000, 1, 2100, 6, 2200, 4,
			2300, 2, 2400, 1, 2500, 6 ];
let arr = new Array(200);
let day = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
let calendar = new Array(6);
for(var i = 0; i < 6; i++){
	calendar[i] = new Array(7);
}

class Calendar extends React.Component{
	constructor(props){
		super(props);
		this.dayAndYear = dayAndYear;
		this.day = day;
		this.arr = arr;
		this.state = {
			calendar: calendar,
			day: 0,
		}
	}

	componentWillMount(){
		var now = new Date();
		var yearNow = now.getFullYear();

		for(var i = yearNow - 100; i <= yearNow + 100; i++){
			arr.push(i);
		}

		this.setState({
			year: yearNow,
			month: now.getMonth() + 1,
			day: now.getDate(),
			calendar: this.changeCalendar(now.getMonth() + 1, yearNow),
		})
	}

	onChange(event){
		var newState = {...this.state, [event.target.name]: event.target.value};

		newState = {...newState, 
			calendar: this.changeCalendar(newState.month, newState.year)
		};

		this.setState(newState);
	}

	changeCalendar(month, year){

		var count = 0;
		var i,j;
		for(i = 0; i < 6; i++){
			for (j = 0; j < 7; j++){
				this.state.calendar[i][j] = null;
			}
		}
		var firstDay = this.firstDayOfYear(parseInt(month), parseInt(year));
		var lastDay = 0;
		// console.log('next year: '+(parseInt(year) + 1));
		if(parseInt(month) === 12){
			lastDay = this.firstDayOfYear(1, (parseInt(year) + 1));
		} else{
			lastDay = this.firstDayOfYear((parseInt(month) + 1), parseInt(year));
		}

		

		this.day[2] = this.dayOfFeb(year);
		console.log('day of month 2: ',this.day[2]);

		var dayOfMonth = day[month];
		var newCalendar = [...this.state.calendar];

		count = 1;

		
		for(i = 0; i< firstDay; i++){
			newCalendar[0][i] = '';
		}


		for(i = firstDay; i < 7; i++){
			newCalendar[0][i] = count++;
		}

		for(j = 0; j < 7; j++){
			newCalendar[5][j] = '';
		}

		if(firstDay < 5 || (firstDay === 5 && dayOfMonth < 31)){
			for(i = 1; i < 4; i++){
				for (j = 0; j < 7; j++){
					newCalendar[i][j] = count++;
				}
			}

			while(lastDay === 0){
				lastDay += 7;
			}

			if(count <= dayOfMonth){
				for(j = 0; j < lastDay; j++){
					newCalendar[4][j] = count++;
				}

				for(j = lastDay; j < 7; j++){
					newCalendar[4][j] = '';
				}

				return newCalendar;
			}

			

			return newCalendar;
		}else{
			console.log('else');
			for(i = 1; i < 5; i++){
				for (j = 0; j < 7; j++){
					console.log('row ',i,' ', count);
					if(count <= dayOfMonth){
						newCalendar[i][j] = count++;
					}
				}
			}

			if(lastDay === 0){
				lastDay += 6;
			}

			if(count <= dayOfMonth){
				for(j = 0; j < lastDay; j++){
					console.log('row second',i,' ', count);
					newCalendar[5][j] = count++;
				}

				for(j = lastDay; j < 7; j++){
					newCalendar[5][j] = '';
				}

				return newCalendar;
			}

			

			return newCalendar;
		}
	}

	isLeapYear(year) {
		var twoLastDigitsOfYear = parseInt(year % 100);
		if (twoLastDigitsOfYear % 4 === 0) {
			return true;
		}
		return false;
	}

	dayOfFeb(year) {
		if (this.isLeapYear(year)) {
			return 29;
		}
		return 28;
	}


	doomsdayOfYear(year) {
		var lastTwoDigits = year % 100;
		var temp1, temp2, temp3, temp4;
		var firstTwoDigits = parseInt(year / 100);
		var i;
		var dateOfYear = 0;

		temp1 = parseInt(lastTwoDigits / 12);
		temp2 = parseInt(lastTwoDigits % 12);
		temp3 = parseInt(temp2 / 4);
		temp4 = (temp1 + temp2 + temp3) % 7;
		for (i = 1; i < this.dayAndYear.length - 1; i += 2) {
			if ((parseInt(this.dayAndYear[i] / 100)) === firstTwoDigits) {
				var temp = this.dayAndYear[i + 1];
				temp += temp4;
				dateOfYear = temp;
			}
		}
		return dateOfYear;
	}

	firstDayOfYear(monthChoose, yearChoose){
		var dayBegin = 0;

		switch (monthChoose) {
		case 1: {
			if (!this.isLeapYear(yearChoose)) {
				dayBegin = this.doomsdayOfYear(yearChoose) - 2;
				while (dayBegin < 0) {
					dayBegin = dayBegin + 7;
				}
				break;
			}
			dayBegin = this.doomsdayOfYear(yearChoose) - 3;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 2: {
			if (!this.isLeapYear(yearChoose)) {

				dayBegin = (this.doomsdayOfYear(yearChoose) + 1) % 7;
				break;
			}
			dayBegin = this.doomsdayOfYear(yearChoose);
			break;
		}

		case 3: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 6;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 4: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 3;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 5: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 8;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 6: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 5;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 7: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 10;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 8: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 7;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 9: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 4;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 10: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 9;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 11: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 6;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		case 12: {
			dayBegin = this.doomsdayOfYear(yearChoose) - 11;
			while (dayBegin < 0) {
				dayBegin = dayBegin + 7;
			}
			break;
		}

		default:{
			return 0;
		}
		}

		return dayBegin;
	}

	handleSetState(col){
		
	}

	pickedDay(col){
		var date = new Date(this.state.year+'-'+this.state.month+'-'+col);
		if(col.length === 0){
			return null;
		}
		this.setState({
			day: col,
		})

		var handler = this.props.dataGetter;
		console.log('in Calendar ',date);
		if (handler !== undefined && typeof handler === 'function') {
			handler(date);
		}
		return ;
	}

	

	render(){
		return(
			<div className='uk-margin-top customCalendar'>
			<div className='uk-grid-collapse uk-child-width-1-2@s' uk-grid=''>
				<div>
					<select name='month' onChange={this.onChange.bind(this)} className='custom-select' value={this.state.month} >
						<option value='1'>Jan</option>
						<option value='2'>Feb</option>
						<option value='3'>Mar</option>
						<option value='4'>Apr</option>
						<option value='5'>May</option>
						<option value='6'>Jun</option>
						<option value='7'>Jul</option>
						<option value='8'>Aug</option>
						<option value='9'>Sep</option>
						<option value='10'>Oct</option>
						<option value='11'>Nov</option>
						<option value='12'>Dec</option>
					</select>
				</div>
				<div>
					<select name='year' onChange={this.onChange.bind(this)} className='custom-select' value={this.state.year} >
						{
							arr.map((num, index) => {
								return(
									<option key={index}>{num}</option>
								)
							})
						}
					</select>
				</div>
			</div>
				<table>
					<thead>
						<tr className='uk-text-primary'>
							<th>Mon</th>
							<th>Tue</th>
							<th>Wed</th>
							<th>Thu</th>
							<th>Fri</th>
							<th>Sat</th>
							<th>Sun</th>
						</tr>
					</thead>

					<tbody>
						{
							this.state.calendar.map((row, index) => {
								return(
									<tr key={index}>
									{
										row.map((col, index) => {
											return(
												<td 
												className={ col === this.state.day ? 'hiddenCalendar-chosen' : '' }
												onClick={this.pickedDay.bind(this, col)} key={index}>{col}</td>
											)
										})
									}
									</tr>
								)
							})
						}
					</tbody>
				</table>
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
export default withRouter(connect(mapStateToProps)(Calendar));