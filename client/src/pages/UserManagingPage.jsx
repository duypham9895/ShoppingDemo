import React from 'react';
import UserTable from '../components/user/UserTable.jsx';
import UserForm from '../components/user/UserForm.jsx';

class UserManagingPage extends React.Component{
	render(){
		return(
			<div>
				<UserTable />
				<UserForm />
			</div>
		)
	}
}

export default UserManagingPage;