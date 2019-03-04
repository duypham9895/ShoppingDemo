const initialState = {
	user: {
		username: '',
		password: '',
		confirmPassword: '',
		birthday: new Date(),
		email: '',
		phone: '',
	},
	message: {
		username: '',
		password: '',
		confirmPassword: '',
		birthday: '',
		email: '',
		phone: '',
	},
	calendar:{
		active: 'hiddenCalendar hiddenCalendar-active',
		hidden: 'hiddenCalendar',
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

		case 'CU_VALIDATION':{
			return {
				...state,
				message: action.payload.message,
				// result: action.payload.result,
			}
		}

		case 'CU_CHANGE_STATUS_CALENDAR': {
			return {
				...state,
				calendar: action.payload,
			}
		}

		case 'CU_CREATE_ACCOUNT':{
			return {
				...state,
				user: {
					username: '',
					password: '',
					confirmPassword: '',
					birthday: new Date(),
					email: '',
					phone: '',
				} ,
			}
		}

		default:{
			return state;
		}
	}
}

