import { combineReducers } from 'redux';

import Login from './authorize/LoginReducer.jsx';
import ForgotPassword from './authorize/ForgotPasswordReducer.jsx';
import CreateUser from './authorize/CreateReducer.jsx';

export default combineReducers({
	Login,
	ForgotPassword,
	CreateUser,
});