export function changeData(newData){
	return function(dispatch){
		dispatch({
			type: 'Change form data role',
			payload: newData,
		})
	}
}

export function changeRole(id){
	return function(dispatch){
		dispatch({
			type: 'Change namerole user',
			payload: id,
		})
	}
}

export function addUser(){
	return function(dispatch){
		dispatch({
			type: 'Add new user',
		})
	}
}