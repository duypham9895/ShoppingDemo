import React from 'react';
import Calendar from '../Calendar.jsx';

class CreateForm extends React.Component{



	render(){
		return(
			<div>
			<Calendar />
			<div className='uk-padding uk-position-center boxshadow' style={{width: '45%'}}>

				<h2 className='uk-text-center uk-text-bold uk-text-primary'>Sign Up</h2>
				<div className='uk-margin-medium form-control '>
					<input name='username' id='username'
					className='uk-input' required='required' type='text' />
					<label htmlFor='username' >Username</label>
				</div>

				<div className='uk-margin-medium form-control '>
					<input name='password' id='password'
					className='uk-input' required='required' type='password' />
					<label htmlFor='password' >Password</label>
				</div>

				<div className='uk-margin-medium form-control '>
					<input name='confirmPassword' id='confirmPassword'
					className='uk-input' required='required' type='password' />
					<label htmlFor='confirmPassword' >Confirm Password</label>
				</div>

				<div className='uk-margin-medium form-control '>
					<button>Choose Your Birthday</button>

				</div>

				<div className='uk-margin-medium form-control '>
					<input name='email' id='email'
					className='uk-input' required='required' type='text' />
					<label htmlFor='email' >Email</label>
				</div>

				<div className='uk-margin-medium form-control '>
					<input name='phone' id='phone'
					className='uk-input' required='required' type='text' />
					<label htmlFor='phone' >Phone</label>
				</div>
			</div>
			</div>
		)
	}
}

export default CreateForm;