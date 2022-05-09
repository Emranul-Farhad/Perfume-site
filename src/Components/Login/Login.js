import React, { useState } from 'react';
import './Login.css'
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
// import Loader from '../../Loader/Loader';
import toast from 'react-hot-toast';
import auth from '../../Firebase key/Fire';
// import toast, { Toaster } from 'react-hot-toast';





const Login = () => {

    const navigate = useNavigate()
    const [approve , setApprove] = useState(false)
    const [errors, setError] = useState("")
    const [email, setEmai] = useState("")
    const [password, setPassword] = useState("")
    const [conpass, setConpass] = useState(" ")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

     const [Email , setEmaiL] = useState("")
     const [PassworD , setPasswords] = useState("")
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
    toast('successfully done!', {id : "signup"}  , {
        icon: '👏', 
      });
    navigate(from, { replace: true })
  }

    const signuphandel = event => {
        if(password.length < 7){
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
  

    if (users) {
        toast.success('Successfully login done', {id : "login"} )
      navigate(fromL, { replace: true })
    }

    
    const handelLogin = (event) => {
        event.preventDefault()
        if(PassworD === ""){
            setError('must need passwords')
        }
        else { 
        signInWithEmailAndPassword(Email , PassworD)
        }
    }

    
    const forgetPassword = async () =>{
        if(Email === ''){
           return toast.error('input your email' , {id : 'resetEmailinput'})
        }
        await sendPasswordResetEmail(Email);
        toast.success('Email send')
    }
    



    return (
        <div className='mt-20'>
           

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
                            <button className='loginButton' >Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form  onSubmit={handelLogin} >
                            <label for="chk" aria-hidden="true">Login</label>
                            <input onBlur={EmailLogin} type="email" name="email" placeholder="Email" required />
                            <input onBlur={PassLogin}  type="password" name="pswd" placeholder="Password" required />  
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

        </div>


    );
};


export default Login;