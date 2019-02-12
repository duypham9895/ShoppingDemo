const initialState = {
	user: {
		username: '',
		password: '',
		confirmPassword: '',
		birthday: null,
		email: '',
		phone: '',
	},
	model: {},
	message: {
		username: '',
		password: '',
		confirmPassword: '',
		birthday: '',
		email: '',
		phone: '',
	},
	result: false,
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case 'CU_CHANGE_USER_INFO':{
			return{
				...state,
				user: action.payload,
			}
		}

		case 'CU_VALIDATION':{
			return {
				...state,
				message: action.payload.message,
				// result: action.payload.result,
			}
		}

		default:{
			return state;
		}
	}
}

