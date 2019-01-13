import React from 'react';

class Product extends React.Component{
	constructor(props){
		super(props);
	}

	test(event){
		if(event.keyCode === 13){
			console.log('enter');	
		}
		
	}
// {
// 	this.props.product.isHidden===true ? 'uk-grid hidden' : 'uk-grid'
// }
// 
// <div className='uk-grid-small uk-child-width-1-3 uk-text-center' uk-grid=''>
// 	{
// 		this.props.product.list.map((product , index) => {
//     		return(
//     			<div key={index} className='uk-margin uk-margin-top'>
//     				<p className='uk-text-center'>{product.name}</p>

//     				<p className='uk-margin-top'>{product.price}</p>
    				
//     				<button className='uk-button uk-button-primary uk-margin-top' ><span className='fas fa-shopping-cart'></span> Add Cart</button>
//     			</div>
//     		)
//     	})
// 	}
// </div>
	render(){
		return(
			<div className='uk-container'>
				
				<div className='uk-grid'>
					<div className='uk-width-1-5'>
					Filter
					</div>
					<div className='uk-width-4-5'>
						product
					</div>
				</div>
			</div>
		)
	}
}

export default Product;