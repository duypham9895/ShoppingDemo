export function changeData(newData) {
	return function (dispatch) {
		dispatch({
			type: 'CHANGE_DATA_INPUT',
			payload: newData,
		})
	}
}

export function requestDataLogin(data, history) {
	return function (dispatch){
		fetch('http://localhost:8080/user/login',{
			method: 'POST',
			mode: 'cors',
			headers:{
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify(data)
		})
		.then(
			(res) => {
				if(res.ok){
					res.json().then(result => {
						if(result.status === 'SUCCESS') {
							history.push('/shopping');
							dispatch({
								type: 'LOGIN_SUCCESS',
								payload: result.object,
							});
						}
					});
				}
				

			},
			(error) => console.log(error)
		)
	}
}