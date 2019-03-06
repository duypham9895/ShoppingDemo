const initialState = {
	user: {
		username: 'admin',
		role: 'Admin',
		images: [
			'default_avatar.jpg'
		]
	},
	form:{
		data:{
			username: '',
			password: '',
		},
		forgot:{
			email: '',
			phone: '',
		},
	}
};

export default function reducer(state = initialState, action) {
	switch(action.type){
		case 'CHANGE_DATA_INPUT':{
			return {
				...state,
				form : {
					...state.form,
					data : action.payload
				}
			};
		}

		case 'LOGIN_SUCCESS':{
			return {
				...state,
				user : action.payload
			}
		}
		default: {
			return state;
		}
	}
}