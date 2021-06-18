import { lazy } from "react";

const Login = lazy(() => import('../Containers/Login/Login'));
const Register = lazy(() => import('../Containers/Register/Register'));
const UsersList = lazy(() => import('../Containers/UsersList/UsersList'));

const routes = [
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/UsersList',
        component: UsersList
    },
    {
        path: '/',
        component: Login
    },
];

export default routes;