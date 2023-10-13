import { Link } from "react-router-dom"
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Button from 'react-bootstrap/Button';
import AlertMessage from '../layout/AlertMessage'

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext)
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    const [alert, setAlert] = useState(null)
    const { username, password } = loginForm

    const onChangeLoginForm = event =>
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

    const login = async event => {
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
            if (!loginData.success) {
                setAlert({ type: 'danger', message: loginData.message })
                setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleeye() {
        var eye = document.getElementById("pass");
        if (eye.type === "password") {
            eye.type = "text";
        } else {
            eye.type = "password";
        }
    }

    return (

        <div className="px-5 py-4 w-25 mx-auto rounded-bottom bg-light text-dark">
            <form onSubmit={login}>

                <h3 className="d-flex justify-content-center" >Sign In</h3>
                <div className="form-group mt-3">
                    <label>User Name</label>
                    <input
                        type="text"
                        required
                        name='username'
                        className="form-control mt-1"
                        placeholder="Enter email"
                        value={username}
                        onChange={onChangeLoginForm}
                    />
                </div>
                <label>Password</label>
                <div className="form-group d-flex flex-row-reverse">
                    <div className="position-absolute me-2 mt-2">
                        <i id="iconeye" className="fa-sharp fa-solid fa-eye" onClick={handleeye}></i>
                    </div>
                    <input
                        type="password"
                        required
                        className="form-control mt-1"
                        placeholder="Enter password"
                        id='pass'
                        name='password'
                        value={password}
                        onChange={onChangeLoginForm}
                    />
                </div>

                <AlertMessage info={alert} />


                <div className="w-100 mb-2 mt-5">
                    <button type="submit" className="w-100 btn btn-dark ">
                        Login
                    </button>
                </div>
                <div >
                    <b className="d-flex justify-content-center">OR</b>
                </div>

                <div className="mt-2">
                    <div>
                        <Link className="iconface" to='https://legacy.reactjs.org/docs/handling-events.html'>
                            <Button className="iconface">
                                <i class="fa-brands fa-facebook fa-xl mr-2"></i>
                                FACEBOOK
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <div className="mt-2">
                            <Link className="icongg" to='https://legacy.reactjs.org/docs/handling-events.html'>
                                <Button className="icongg">
                                    <i class="fa-brands fa-google fa-xl mr-2"></i>
                                    GOOGLE
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <p className="text-center mt-2">
                        <Link to='/'>Forgot Password ?</Link>
                    </p>
                </div>




            </form>
        </div>


    )
}

export default LoginForm
