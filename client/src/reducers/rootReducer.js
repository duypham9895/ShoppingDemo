import { combineReducers } from 'redux';

import Login from './authorize/LoginReducer.jsx';
import ForgotPassword from './authorize/ForgotPasswordReducer.jsx';

export default combineReducers({
	Login,
	ForgotPassword,
});