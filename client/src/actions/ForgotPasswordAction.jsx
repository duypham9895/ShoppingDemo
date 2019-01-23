export function changeInput(name,value){
	return function(dispatch){
		dispatch({
			type: 'FP_CHANGE_INPUT',
			payload: {
				name: name,
				value: value,
			},
		});
	}
}


export function changeCode(value){
	return function (dispatch){
		dispatch({
			type: 'FP_CHANGE_CONFIRMCODE',
			payload: value,
		})
	}
}

export function forgotPassword(username){
	return function(dispatch){
		dispatch({
			type: 'FP_FETCH',
			payload: true,
		});
		fetch('http://localhost:8080/user/forgot?username='+username,{
			method: 'GET',
			mode: 'cors',
			headers:{
				'Content-Type' : 'application/json'
			}
		})
		.then(
			(res) => res.json(),
			(err) => console.log(err)
		)
		.then((res) => {
			console.log(res);
			if(res.status === 'FAIL'){
				dispatch({
					type: 'NOTICE_MESSAGE',
					payload: res.message,
				});
			};
			if(res.status === 'SUCCESS'){
				dispatch({
					type: 'CHANGE_STATUS',
					payload: res.object,
				});
			};
			dispatch({
				type: 'FP_FETCH',
				payload: false,
			});
		})

		fetch('http://localhost:8080/user/'+username,{
			method: 'GET',
			mode: 'cors',
			headers:{
				'Content-Type': 'application/json'
			},
		})
		.then(
			(res) => res.json(),
			(err) => console.log(err),
		)
		.then((res) => {
			if(res.status === 'SUCCESS'){
				dispatch({
					type: 'FP_SET_MODEL',
					payload: res.object,
				})
			}
		})
	}
}

export function submitCode(){
	return function (dispatch) {
		dispatch({
			type: 'SUBMIT_CODE',
		})
	}
}

export function updatePassword(model){
	return function (dispatch){
		fetch('http://localhost:8080/user/update',{
			method: 'PUT',
			mode: 'cors',
			headers:{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(model),
		})
		.then((res) => res.json(), (err) => console.log(err))
		.then((res) => console.log(res.object));
		dispatch({
			type: 'FP_RESET_FORM'
		})
	}
}

export function resetAll(){
	return function (dispatch){
		dispatch({
			type: 'FP_RESET_FORM'
		})
	}
}

export function setMessage(message){
	return function (dispatch){
		dispatch({
			type: 'FP_SET_MESSAGE',
			payload: message,
		})
	}
}