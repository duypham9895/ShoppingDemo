export function changeUserInfo(user){
	return function (dispatch){
		dispatch({
			type: 'CU_CHANGE_USER_INFO',
			payload: user,
		})
	}
}