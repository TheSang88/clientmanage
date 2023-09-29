import { Link, Navigate } from "react-router-dom";
import '../page/auth.css'

import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm"
import Button from 'react-bootstrap/Button';
import { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import Spinner from 'react-bootstrap/Spinner'


const Auth = ({ authRoute }) => {
    let body
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    if (authLoading)
        body = (
            <div className='d-flex justify-content-center mt-2'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    else if (isAuthenticated) return <Navigate to='/dashboard' />

    else {
        if (authRoute === 'login') {
            body = (<LoginForm />)
        } else if (authRoute === 'register') {
            body = (<RegisterForm />)
        }
    }

    return (
        <div className="page">
            <div>
                <div className="w-25 mx-auto bg-light text-dark rounded-top">
                    <Link to="/login">
                        <Button className="w-50 bg-light text-dark btn btn-outline-light">Login</Button>
                    </Link>
                    <Link to="/register">
                        <Button className="w-50 bg-light text-dark btn btn-outline-light">Register</Button>
                    </Link>
                </div>
                {body}
            </div>
        </div>


    )
}
export default Auth;