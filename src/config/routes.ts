import {
    Login,
    Register,
    Home
} from '../pages';


export const routes = [
    {
        path: "/login",
        element: Login,
        name: "Login Page",
        protected: false
    },
    {
        path: "/register",
        element: Register,
        name: "Register Page",
        protected: false
    },
    {
        path: "/home",
        element: Home,
        name: "Home Page",
        protected: true
    },
];