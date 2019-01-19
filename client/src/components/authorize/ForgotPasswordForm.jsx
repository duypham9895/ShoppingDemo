import React from 'react';
import { connect } from 'react-redux';

class ForgotPasswordForm extends React.Component{
	render(){
		return(
			<div>
				<p>forgot</p>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return{
		data: store.Login.form.forgot,
	}
}

export default connect(mapStateToProps)(ForgotPasswordForm);