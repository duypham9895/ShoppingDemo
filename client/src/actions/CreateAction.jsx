export function changeUserInfo(user) {
	return function (dispatch){
		dispatch({
			type: 'CU_CHANGE_USER_INFO',
			payload: user,
		})
	}
}

// export function validUsername(user)

export function validInfo(user, oldMessage) {
	return function (dispatch) {
		dispatch({
			type: 'CU_VALIDATION',
			payload: {
				message: oldMessage,
				// result: result,
			}
		})
	}
}

export function changeStatusCalendar(value){
	return function (dispatch){
		dispatch({
			type: 'CU_CHANGE_STATUS_CALENDAR',
			payload: value,
		})
	}
}

export function createAccount(user){
	console.log('action create account');
	return function (dispatch){
		fetch('http://localhost:8080/user/new', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(user),
		})
		.then((res) => {
			if(res.ok){
				res.json().then((result) => {
					if(result.status === 'SUCCESS'){
						
						dispatch({
							type: 'CU_CREATE_ACCOUNT',
							payload: result.object,
						})
					}
				})
			}
		},
		(err) => console.log(err)
		)
	}
}