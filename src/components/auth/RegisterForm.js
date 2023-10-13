import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'
const RegisterForm = () => {
    const { registerUser } = useContext(AuthContext)

    // Local state
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const [alert, setAlert] = useState(null)

    const { username, password, confirmPassword } = registerForm

    const onChangeRegisterForm = event =>
        setRegisterForm({
            ...registerForm,
            [event.target.name]: event.target.value
        })

    const register = async event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            setAlert({ type: 'danger', message: 'Passwords do not match' })
            setTimeout(() => setAlert(null), 5000)
            return
        }

        try {
            const registerData = await registerUser(registerForm)
            if (!registerData.success) {
                setAlert({ type: 'danger', message: registerData.message })
                setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="px-5 py-4 w-25 mx-auto rounded-bottom bg-light text-dark">
            <form onSubmit={register}>
                <h3 className="d-flex justify-content-center" >Sign Up</h3>
                <div className="form-group mt-2">
                    <label>Full Name</label>
                    <input
                        type="text"
                        required
                        className="form-control mt-1"
                        placeholder="Username"
                        name='username'
                        value={username}
                        onChange={onChangeRegisterForm}
                    />
                </div>
                <div className="form-group mt-2">
                    <label>Email address</label>
                    <input
                        type="email"
                        required
                        className="form-control mt-1"
                        placeholder="Email Address"
                    />
                </div>
                <div className="form-group mt-2">
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        className="form-control mt-1"
                        placeholder="Password"
                        name='password'
                        value={password}
                        onChange={onChangeRegisterForm}
                    />
                </div>

                <div className="form-group mt-2">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        required
                        className="form-control mt-1"
                        placeholder="Confirm Password"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={onChangeRegisterForm}
                    />
                </div>
                <AlertMessage info={alert} />
                <button className='w-100 btn btn-dark mt-5' type='submit'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterForm
