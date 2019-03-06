import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

class Sidebar extends React.Component{
	constructor(){
		super();
		this.state = {
			productList: false,
			accountList: false,
		}
	}

	dropdown(name){
		this.setState({
			[name]: !this.state[name]
		})
	}

	render(){
		const user = this.props.user;
		return(
			<div className='uk-height-1-1 '>
				<div className='' style={{height: '20%'} }>
					<img src={'http://localhost:8080/images/get/'+ user.images[0] } className='MP-image-user uk-width-2-5' />
					<span className='uk-width-3-5'>Hello {user.username}</span>
				</div>

				<div style={{height: '70%', overflow: 'auto'} }>
					<div>
						<div className='uk-margin-left pointer'  onClick={this.dropdown.bind(this, 'productList')}>
							<i className='fas fa-list uk-margin-small-right' onClick={this.dropdown.bind(this)}></i>
							Danh Muc San Pham
						</div>
						<div className={
							this.state.productList === true ? 'dropdown dropdown-active' : 'dropdown'
						}>
							<ul className=''>
								<li>Dien thoai</li>
								<li>Laptop</li>
								<li>May tinh bang</li>
								<li>Phu kien</li>
								<li>Dong ho</li>
							</ul>
						</div>
					</div>

					<div>
						<div className='uk-margin-left pointer'  onClick={this.dropdown.bind(this, 'accountList')}>
							<i className='fas fa-list uk-margin-small-right' onClick={this.dropdown.bind(this)}></i>
							Quan ly tai khoan
						</div>

						<div className={
							this.state.accountList === true ? 'dropdown dropdown-active' : 'dropdown'
						}>
							<ul className=''>
								<li>Admin</li>
								<li>Member</li>
								<li>Black list</li>
							</ul>
						</div>

					</div>

				</div>

				<div style={{height: '10%'} }>
					<div>Dang xuat</div>

				</div>

			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return{
		user: store.Login.user,
	}
}

export default connect(mapStateToProps)(Sidebar);