import { lazy } from "react";

const Login = lazy(() => import('../Containers/Login/Login'));
const Register = lazy(() => import('../Containers/Register/Register'));


const routes = [
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/',
        component: Login
    },
];

export default routes;