import React from 'react';


class Calendar extends React.Component{
	constructor(props){
		super(props);

	}

	componentWillMount(){
		this.arr =  new Array(5);

		for( var i = 0; i < 5; i++){
			this.arr[i] = new Array(7);
		}

		for(var i = 0; i < 5; i++){
			for( var j = 0 ; j < 7; j++){
				this.arr[i][j] = 0;
			}
		}

		let now = new Date();

		this.setState({
			year: now.getFullYear(),
			month: now.getMonth(),
		})
	}
	render(){
		console.log(this.state.month);
		var yearDom = '';
		var arr = new Array(200);
		for(var i = this.state.year - 100; i <= this.state.year; i++){
			arr.push(i);
		}
		return(
			<div className='customCalendar'>
			<div className='uk-grid-collapse uk-child-width-1-2@s' uk-grid=''>
				<div>
					<select className='uk-select' value={this.state.month} >
						<option value='0'>Jan</option>
						<option value='1'>Feb</option>
						<option value='2'>Mar</option>
						<option value='3'>Apr</option>
						<option value='4'>May</option>
						<option value='5'>Jun</option>
						<option value='6'>Jul</option>
						<option value='7'>Aug</option>
						<option value='8'>Sep</option>
						<option value='9'>Oct</option>
						<option value='10'>Nov</option>
						<option value='11'>Dec</option>
					</select>
				</div>
				<div>
					<select className='uk-select' value={this.state.year} >
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
							this.arr.map((row, index) => {
								return(
									<tr key={index}>

									{
										row.map((col, index) => {
											return(
												<td key={index}>{col}</td>
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

export default Calendar;