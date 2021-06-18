import { lazy } from "react";

const Login = lazy(() => import('../Containers/Login/Login'));
const Register = lazy(() => import('../Containers/Register/Register'));
const UsersList = lazy(() => import('../Containers/UsersList/UsersList'));
const AccessDenied = lazy(() => import('../Containers/AccessDenied/AccessDenied'));
const HomePage = lazy(() => import('../Containers/HomePage/HomePage'));

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
        path: '/AccessDenied',
        component: AccessDenied
    },
    {
        path: '/HomePage',
        component: HomePage
    },
    {
        path: '/',
        component: Login
    },
];

export default routes;