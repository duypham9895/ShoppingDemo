import React from 'react';

class ShoppingPage extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(	
			<div>
				<div className='uk-grid-small uk-child-width-1-3 uk-text-center' uk-grid=''>
					{
						this.props.product.list.map((product , index) => {
				    		return(
				    			<div key={index} className='uk-margin uk-margin-top'>
				    				<p className='uk-text-center'>{product.name}</p>

				    				<p className='uk-margin-top'>{product.price}</p>
				    				
				    				<button className='uk-button uk-button-primary uk-margin-top' ><span className='fas fa-shopping-cart'></span> Add Cart</button>
				    			</div>
				    		)
				    	})
					}
				</div>
			</div>
		)
	}
}

export default ShoppingPage;