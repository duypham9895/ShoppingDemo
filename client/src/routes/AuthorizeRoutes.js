import Login from '../reducers/authorize/LoginReducer.jsx';
import ForgotPassword from '../reducers/authorize/ForgotPasswordReducer.jsx';

export default {
    Login: {
        component: Login,
        path: '/'
    },
    ForgotPassword: {
        component: ForgotPassword,
        path: '/forgot'
    },
};