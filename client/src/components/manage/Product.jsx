import React from 'react';
import { connect } from 'react-redux';

class Product extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {

	}
}

export default connect(mapStateToProps)(Product);