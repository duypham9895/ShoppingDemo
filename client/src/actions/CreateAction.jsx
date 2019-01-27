export function changeUserInfo(user) {
	return function (dispatch){
		console.log("begin change info");
		dispatch({
			type: 'CU_CHANGE_USER_INFO',
			payload: user,
		})
	}
}

export function validInfo(user, oldMessage) {
	return function (dispatch) {
		var message = { ...oldMessage };
		var temp = user.username;
		var flag = true;

		if(temp.length < 8){
			console.log('checking username');
			flag = false;
			message.username = '(*) Your username length must be longer than 7.';
		} else {
			if( temp.match(/\W/) != null ){
				flag = false;
				message.username = '(*) Your username must not contain special character.';
			} else {

				message.username = '';
				// fetch('http://localhost:8080/user/'+temp,{
				// 	method: 'GET',
				// 	mode: 'cors',
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 	}
				// })
				// .then(
				// 	(res) => res.json(),
				// 	(err) => console.log(err)
				// )
				// .then(
				// 	(res) => {
				// 		if( res.object != null){
				// 			flag = false;
				// 			message.username = '(*) Your usename has already exsited.';
				// 		} else{
				// 			message.username = '';
				// 		}
				// 	}
				// )
			}
		}

		temp = user.password;

		if( temp.length < 8 ){
			flag = false;
			message.password = '(*) Your password length must be longer than 7.';
		} else {
			if( temp !== user.confirmPassword ){
				flag = false;
				message.password = '(*) Your password and Confirm Password must be matched.';
				message.confirmPassword = '(*) Your password and Confirm Password must be matched.';
			} else {
				message.password = '';
				message.confirmPassword = '';
			}
		}

		var now = new Date().getFullYear();

		if ( user.birthday === null){
			flag = false;
			message.birthday = '(*) Your birthday must not be empty.';
		} else {
			if( ( now - user.birthday.getFullYear() ) < 18){
				flag = false;
				message.birthday = '(*) You must be 18 or older.';
			} else {
				message.birthday = '';
			}
		}

		var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		
		if(user.email.match(re) === null) {
			flag = false;
			message.email = '(*) Your email must be email type.';
		} else {

			message.email = '';
			// fetch('http://localhost:8080/user/get?field=email&value='+user.email, {
			// 	method: 'GET',
			// 	mode: 'cors',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	}
			// })
			// .then(
			// 		(res) => console.log(res),
			// 		(err) => console.log(err)
			// )
			// .then((res) => console.log(res));
		}

		if(user.phone.length < 10 || ( user.phone.match(/\D/) != null ) ){
			flag = false;
			message.phone = '(*) Your phone must be phone type.';
		} else {

			message.phone = '';
			// fetch('http://localhost:8080/user/get?field=phone&value='+user.phone, {
			// 	method: 'GET',
			// 	mode: 'cors',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	}
			// })
			// .then(
			// 		(res) => {

			// 			if( res.headers.get('Content-Type') === 'undefined'){
			// 				message.phone = '';
			// 			} else {
			// 				flag = false;
			// 				message.phone = '(*) Your phone has already been used.';
			// 			}
			// 		},
			// 		(err) => console.log(err)
			// )
		}

		dispatch({
			type: 'CU_VALIDATION',
			payload: {
				message: message,
				result: flag,
			}
		})
		
		// fetch('http://localhost:8080/user/new',{
		// 	method: 'POST',
		// 	mode: 'cors',
		// 	headers:{
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json',
		// 	},

		// })
		// .then(
		// 	(res) => res.json(),
		// 	(err) => console.log(err)
		// )
		// .then((res) => {
		// 		console.log(res);
		// 		if(res.status === 'SUCCESS'){
		// 			dispatch({
		// 				type: 'CU_VALID_USER',
		// 				payload: res.object,
		// 			});
		// 		}
		// 		else{
		// 			dispatch({
		// 				type: 'CU_ERROR',
		// 				payload: res.message,
		// 			});
		// 		}
		// 	}
		// )
	}
}