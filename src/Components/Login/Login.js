import React, { useState } from 'react';
import './Login.css'
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase key/Fire';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import axios from 'axios';






const Login = () => {

    // sign in with google
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    if (googleloading) {
        <loading></loading>
    }

    // sign in with email and passwords
    const navigate = useNavigate()
    const [approve, setApprove] = useState(false)
    const [errors, setError] = useState("")
    const [email, setEmai] = useState("")
    const [password, setPassword] = useState("")
    const [conpass, setConpass] = useState(" ")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);


    // 

    const [Email, setEmaiL] = useState("")
    const [PassworD, setPasswords] = useState("")
    const [
        signInWithEmailAndPassword,
        users,
        loadings,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(
        auth
    );

    const getemail = event => {
        setEmai(event.target.value)
        console.log(event.target.value);
    }

    const getpass = event => {
        setPassword(event.target.value)
        console.log(event.target.value);
    }

    const confirmpass = event => {
        setConpass(event.target.value)
    }

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";



    if (user) {
        toast('successfully done!', { id: "signup" }, {
            icon: '👏',
        });
        navigate(from, { replace: true })
    }

    const signuphandel = event => {
        if (password.length < 7) {
            return alert("password must be 8 character")
        }
        event.preventDefault()
        if (password !== conpass) {
            return setError("password don't matched ")

        }
        createUserWithEmailAndPassword(email, password)
        setError("  ")


    }

    // handel sign up end here .
    // login started from here


    const EmailLogin = event => {
        setEmaiL(event.target.value)
        console.log(setEmaiL);
    }

    const PassLogin = event => {
        setPasswords(event.target.value)
        console.log(setPasswords);
    }

    const locationLog = useLocation()
    let fromL = locationLog.state?.from?.pathname || "/";


    if (users || googleuser) {
        toast.success('welcome back', { id: "login" })

    }

    // handel login

    const handelLogin = async (event) => {
        event.preventDefault()
        if (PassworD === "") {
            setError('must need passwords')
        }
        else {
            await signInWithEmailAndPassword(Email, PassworD)
            const { data } = await axios.post('https://secure-chamber-07199.herokuapp.com/login', { Email })
            localStorage.setItem('accessToken', data.accessToken)
            navigate(fromL, { replace: true })
        }
    }


    const forgetPassword = async () => {
        if (Email === '') {
            return toast.error('input your email', { id: 'resetEmailinput' })
        }
        await sendPasswordResetEmail(Email);
        toast.success('send')
    }






    return (
        <div className='mt-20'>


            {loading ? <Loading></Loading> :
                <div className='d-flex justify-content-center loginMain'>
                    <div className="main">
                        <input type="checkbox" id="chk" aria-hidden="true" />

                        <div className="signup">
                            <form onSubmit={signuphandel} >
                                <label for="chk" aria-hidden="true">Sign up</label>
                                <input onBlur={getemail} type="email" name="email" placeholder="Email" required />
                                <input onBlur={getpass} type="password" name="pswd" placeholder="Password" required />
                                <input onBlur={confirmpass} type="password" name="txt" placeholder="Confirm Password" required />
                                <p style={{ color: 'red' }} > {errors} </p>
                                {
                                    googleerror && <p> {error.message} </p>
                                }
                                <button className='loginButton' >Sign up</button>
                            </form>

                            {/* google sign in */}

                            <button onClick={() => signInWithGoogle()} className='mb-3 googlesignin'>Sign with google</button>
                            {/*  */}
                        </div>

                        <div className="login">
                            <form onSubmit={handelLogin} >
                                <label for="chk" aria-hidden="true">Login</label>
                                <input onBlur={EmailLogin} type="email" name="email" placeholder="Email" required />
                                <input onBlur={PassLogin} type="password" name="pswd" placeholder="Password" required />
                                <div className='forget'> <p onClick={forgetPassword} >forget passwords</p> </div>
                                <p style={{ color: 'red' }} > {errors} </p>
                                {
                                    error && <p>  {error.message} </p>
                                }
                                <button className='loginButton' >Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            }

        </div>


    );
};


export default Login;