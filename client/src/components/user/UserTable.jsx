import React from 'react';
import { connect } from 'react-redux';

import UserForm from './UserForm.jsx';

class UserTable extends React.Component{
	render(){
		return(
			<div>

				<table >
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Role</th>
						</tr>	
					</thead>

					<tbody>
						{
							this.props.list.map((user, index) => {
								return(
										<tr key={index}>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.role}</td>
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
		list: store.User.list
	} 
}

export default connect(mapStateToProps)(UserTable);