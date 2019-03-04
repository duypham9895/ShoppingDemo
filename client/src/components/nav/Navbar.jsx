import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component{
	render(){
		const user = this.props.user;
		return(
			<nav className='uk-navbar-container uk-margin' uk-navbar='' >
				<div className='uk-navbar-left' >
					<span className='uk-navbar-item uk-logo'>Logo</span>
					

			        <div className="uk-navbar-item">
			            <form className="uk-search uk-search-navbar">
			                <span uk-search-icon=''></span>
			                <input className="uk-search-input" type="search" placeholder="Search..." />
			            </form>


			        </div>

			        <div className="uk-navbar-item uk-width-small">
			        cart
			        </div>

			        <div className="uk-navbar-item uk-width-small">
			        	{
			        		user !== null ?
			        		(
			        			<Link to=''>Hello, {user.username}</Link>
			        		)
			        		:
			        		(
			        			<Link to='/user/Login'>Login</Link>
			        		)
			        	}
			        </div>

				</div>

			</nav>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		user: store.Login.user,
	}
}

export default connect(mapStateToProps)(Navbar);