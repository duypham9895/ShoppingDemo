import React from 'react';

class ShoppingPage extends React.Component{

  	redirectLogin() {
  		this.props.history.push('/login');
  	}

	render(){
		console.log(this.props);
		const auth = this.props.auth;
		return(	
			<div>
				<nav className='uk-padding-small'>
					<div className='uk-grid-collapse' uk-grid=''>
						<div className='uk-width-1-5'>Banner</div>
						<div className='uk-width-3-5'>Nav</div>
						<div className='uk-width-1-5'>
							{
								auth===null ? 
								(<button className='uk-button uk-button-primary' onClick={this.redirectLogin.bind(this)}>Sign In/ Sign Up</button>)
								:
								(<p>Hello {auth.user.username}</p>)
							}
						</div>
					</div>
				</nav>
				<div className='uk-grid-collapse uk-padding-small' uk-grid=''>
					<div className='uk-width-1-5'>
						1
					</div>
					<div className='uk-width-4-5'>
						4
					</div>
				</div>
			</div>
		)
	}
	// <div className='uk-grid-small uk-child-width-1-3 uk-text-center' uk-grid=''>
	// 				{
	// 					this.props.product.list.map((product , index) => {
	// 			    		return(
	// 			    			<div key={index} className='uk-margin uk-margin-top'>
	// 			    				<p className='uk-text-center'>{product.name}</p>

	// 			    				<p className='uk-margin-top'>{product.price}</p>
				    				
	// 			    				<button className='uk-button uk-button-primary uk-margin-top' ><span className='fas fa-shopping-cart'></span> Add Cart</button>
	// 			    			</div>
	// 			    		)
	// 			    	})
	// 				}
	// 			</div>
}

export default ShoppingPage;