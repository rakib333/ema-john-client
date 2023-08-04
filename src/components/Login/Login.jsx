// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const { signIn, googleLogIn, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

    let from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;

                if (!loggedUser.emailVerified) {

                    return toast.error('Please verify your email first')
                }
                console.log(loggedUser)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)

            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    const resetPass = () => {
        const email = emailRef.current.value;
        console.log(email)
        resetPassword(email)
            .then(() => {
                toast.info('Reset password mail send')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className='form-container wrapper'>

            <div className='main-form'>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input ref={emailRef} type="email" name="email" id="email" placeholder='Your email' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type={show ? 'text' : "password"} name="password" id="password" placeholder='Password' />
                        <p onClick={() => setShow(!show)}>
                            <small>{show ? 'Hide pass' : 'Show pass'}</small>
                        </p>
                    </div>
                    <div className='form-control'>
                        <input className='btn-submit' type="submit" value="Login" />
                    </div>
                </form>
                <p>{error}</p>
                <p className='goToLink'>New To ema john?<Link className='toggle-page' to='/signup'>Sign Up</Link></p>
                <p className='goToLink'>Forget password?<button onClick={resetPass} className='toggle-page' >Reset</button></p>
                <div className='horizontal-line'>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>

                <div className='form-control'>
                    <input onClick={handleGoogleLogIn} className='btn-google' type="submit" value="Continue with google" />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;