const initialState = {
	form:{
		data:{
			email: '',
			phone: '',
		}
	}
}

export default function reducer(state = initialState, action ){
	switch(action.type){
		default:{
			return state;
		}
	}
}