import React from 'react';

class AddProduct extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<button onClick={this.props.isHiddenProduct.bind(this)}>Add Product</button>
				<div className=''>
					
				</div>
			</div>
		)
	}
}

export default AddProduct;