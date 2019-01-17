const initialState = {
	list:[
		{
			id: '0',
			name: 'ngochuy',
			role: 'admin'
		},
		{
			id: '1',
			name: 'duy',
			role: 'member'
		},
	],
	form:{
		data:{
			id: '',
			name: '',
			role: '',
		}
	}
}

export default function reducer(state = initialState, action) {
	switch(action.type){
		case 'Change form data role':{
			var newState = {...state};
			newState.form.data = action.payload;
			return newState;
		}

		case 'Change namerole user':{
			var newState = {...state};
			for(var i = 0; i < state.list.length; i++){
				if(parseInt(action.payload) === parseInt(state.list[i].id)){
					var newList = [ ...state.list ];

					newList[i].role.name = state.form.data.role;

					newState = {
						...state,
						list : newList
					}

					return newState;
				}
			}
		}

		case 'Add new user':{
			var newList = [...state.list];
			for(var i = 0; i < newList.length ;i++){
				if(state.form.data.id === newList[i].id){
					return state;
				}
			}

			newList.push(state.form.data);
			var newState = {...state, list: newList};
			return newState;
			
		}


		default:{
			return state;
		}
	}

}