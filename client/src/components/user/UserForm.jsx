import React from 'react';
import { connect } from 'react-redux'

import { changeData, addUser } from '../../actions/UserAction.jsx';

class UserForm extends React.Component{

	changeData(event){
		this.props.dispatch(changeData({
			...this.props.data,
			[event.target.name]: event.target.value
		}))
	}

	addUser(){
		this.props.dispatch(addUser());
	}

	render(){
		return(
			<div>
				<input name='id' onChange={this.changeData.bind(this)}/>
				<input name='name' onChange={this.changeData.bind(this)} />
				<input name='role' onChange={this.changeData.bind(this)} />

				<button onClick={this.addUser.bind(this)}>Add</button>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	console.log(store);
	return{
		data: store.User.form.data
	}
}

export default connect(mapStateToProps)(UserForm);