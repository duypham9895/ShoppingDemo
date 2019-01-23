const initialState = {
	stage: 1,
	form:{
		data:{
			username: '',
			newPassword: '',
			confirmPassword: '',
		},
		model:{},
		confirmCode: '',
	},
	code: '',
	message: '',
	fetching: false,
}

export default function reducer(state = initialState, action ){
	switch(action.type){

		case 'FP_CHANGE_INPUT':{
			return {
				...state,
				form: {
					...state.form,
					data:{
						...state.form.data, [action.payload.name]: action.payload.value,
					}
				}
			}
		}

		case 'FP_SET_MODEL':{
			return {
				...state, form:{
					...state.form, model: action.payload
				}
			}
		}

		case 'NOTICE_MESSAGE':{
			return {
				...state, message: action.payload,
			}
		}

		case 'CHANGE_STATUS':{
			return {
				...state,
				stage: 2 ,code: action.payload,
			}
		}

		case 'FP_CHANGE_CONFIRMCODE':{
			return {
				...state, form:{
					...state.form, confirmCode: action.payload,
				}
			}
		}

		case 'SUBMIT_CODE':{
			return {
				...state, stage: 3
			}
		}

		case 'FP_FETCH':{
			return {
				...state, fetching: action.payload,
			}
		}

		case 'FP_SET_MESSAGE':{
			return {
				...state, message: action.payload,
			}
		}

		case 'FP_RESET_FORM':{
			return {
				stage: 1,
				form:{
					data:{
						username: '',
						newPassword: '',
						confirmPassword: '',
					},
					model:{},
					confirmCode: '',
				},
				code: ''
			}
		}
		default:{
			return state;
		}
	}
}