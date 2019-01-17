import React from 'react';

class AuthorizePage extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			user:{},
			dataUser: {
				username: '',
				password: '',
			},
			list:[],
			isLogin: false,
			message: '',
		};
	}

	// componentWillMount(){
	// 	fetch('http://localhost:8080/login/all',{
	// 		mode:'cors',
	// 		method: 'GET',
	// 		headers:{
	// 			'Content-Type': 'application/json',
	// 		}			
	// 	})
	// 	.then((res) => res.json())
	// 	.then((res) => console.log(res))
	// 	.then((res) => this.setState({
	// 		list: [...this.state.list, res],
	// 	}));
	// }

	checkInfoUser(event){
		this.setState({
			dataUser: {...this.state.dataUser, [event.target.name]: event.target.value}
		});	
	}

	login(){
		fetch('http://localhost:8080/user/login',{
			mode: 'cors',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(this.state.dataUser),
		})
		.then((res) => res.json())
		.then(res => {
			console.log(res);
			if(res.status === 'SUCCESS'){
				this.props.history.push('/');
			}
		})
		.catch(error => console.error('Error:', error));
	}


	render(){
		return(
			<div>
				<nav className='uk-padding-small'></nav>
				<div>
					<div className='uk-width-1-2'>
						<div className='uk-margin form-control'>
							<input onChange={this.checkInfoUser.bind(this)} name='username' id='username' className='uk-input' required='required' type='text' />
							<label htmlFor='username' >Username</label>
						</div>
						<div className='uk-margin form-control uk-margin-top'>
							<input onChange={this.checkInfoUser.bind(this)} name='password' id='password' className='uk-input' required='required' type='password' />
							<label htmlFor='password' >Password</label>
						</div>
						<div className='uk-grid-collapse' uk-grid='' >
							<div className='uk-width-4-5'>
								<p>Forget password</p>
								<p>Create new account</p>
							</div>
							<div className='uk-width-1-5'>
								<button className='uk-button uk-button-primary' onClick={this.login.bind(this)}>Login</button>
								{
									this.state.isLogin===false ? ('') : (<p>{this.state.message}</p>)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AuthorizePage;