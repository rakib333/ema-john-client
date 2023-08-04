import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [cshow, setCshow] = useState(false);
    const navigate = useNavigate();

    const { createUser, googleLogIn } = useContext(AuthContext);


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPassword.value;
        console.log(email, password, confirmPass)

        setError('')
        if (password !== confirmPass) {
            setError('Password did not match!!!')
            return
        }
        else if (password.length < 6) {
            setError('Password must have 6 characters')
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                emailVerification(loggedUser)
                navigate('/login')

            })
            .catch(error => {
                console.log(error.message)
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

    const emailVerification = user => {
        sendEmailVerification(user)
            .then(() => {
                toast.success('verification send')
            })
            .catch(error => {
                console.log(error.message)
            })
    }




    return (
        <div className='form-container wrapper'>

            <div className='main-form'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Your email' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type={show ? 'text' : "password"} name="password" id="password" placeholder='Password' />
                        <p onClick={() => setShow(!show)}>
                            <small>{show ? 'Hide pass' : 'Show pass'}</small>
                        </p>
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type={cshow ? 'text' : "password"} name="confirmPassword" id="confirm-password" placeholder='Confirm password' />
                        <p onClick={() => setCshow(!cshow)}>
                            <small>{cshow ? 'Hide pass' : 'Show pass'}</small>
                        </p>
                    </div>
                    <div className='form-control'>
                        <input className='btn-submit' type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='error'>{error}</p>
                <p className='goToLink'>Already have an account?<Link className='toggle-page' to='/login'>Login</Link></p>
                <div className='horizontal-line'>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>

                <div className='form-control'>
                    {/* <FontAwesomeIcon icon={FaGoogle} /> */}
                    <input onClick={handleGoogleLogIn} className='btn-google' type="submit" value="Continue with google" />
                </div>

                <ToastContainer />
            </div>
        </div>
    );
};

export default SignUp;