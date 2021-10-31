import { 
    Login,
    Register,
    ForgotPassword, 
} from 'ui';

export const authRoutes = {
    login: {
        component: Login,
        path: '/auth/login',
        default: true
    },
    register: {
        component: Register,
        path: '/auth/register'
    },
    forgotPassword: {
        component: ForgotPassword,
        path: '/auth/password/forgot'
    }
};