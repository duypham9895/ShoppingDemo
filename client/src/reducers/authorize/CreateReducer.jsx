const initialState = {
	user:{
		username: '',
		password: '',
		confirmPassword: '',
		birthday: null,
		email: '',
		phone: '',
	}
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case 'CU_CHANGE_USER_INFO':{
			return{
				...state,
				user: action.payload,
			}
		}

		default:{
			return state;
		}
	}
}

