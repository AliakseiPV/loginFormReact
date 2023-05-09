import React, {useState} from 'react';
import classes from "./Login.module.css";
import Errormessage from "../ErrorMessage/Errormessage";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import InputLabel from "../InputLabel/InputLabel";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [submitError, setSubmitError] = useState('')

    const userInfo = {
        email: 'user@gmail.com',
        password: 'test'
    }

    function emailHandler (e) {
        const emailValue = e.target.value
        const filter = /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w\-+_]+)*\s*$/;
        setEmail(emailValue)

        if (!emailValue) {
            setEmailError("Email field can't be empty")
            return
        }
        if (!filter.test(String(emailValue).toLowerCase())) {
            setEmailError('Email field is not correct')
            return;
        }
        setEmailError('');
    }

    function passwordHandler (e) {
        const passwordValue = e.target.value
        const filter = /^[a-zA-Z0-9!@#$%^&*\-]+$/;
        setPassword(passwordValue)

        if (!passwordValue) {
           setPasswordError("Password field can't be empty")
           return
        }
        if (!filter.test(String(passwordValue).toLowerCase())) {
            setPasswordError('Password field is not correct')
            return
        }
        if (passwordValue.length < 3 || passwordValue.length > 10) {
            setPasswordError('The password length is not correct')
            return
        }
        setPasswordError('')
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (email === userInfo.email
            && password === userInfo.password) {
            alert('form submitted')
        } else {
            setSubmitError('Email or password is not correct')
        }
    }

    return (
        <div className={classes.form__container}>
            <form className={classes.login__form} onSubmit={handleSubmit}>
                <h1 className={classes.login__header}>
                    Login form
                </h1>
                <div className={classes.form__input}>
                    <MyInput onChangeHandler={emailHandler} typeInput='text' nameInput='email'/>
                    <InputLabel htmlForName='email' labelText='Email'/>
                    <div className={classes.input__error}>
                        {emailError && <Errormessage errorMessage={emailError}/>}
                    </div>
                </div>
                <div className={classes.form__input}>
                    <MyInput onChangeHandler={passwordHandler} typeInput='password' nameInput='password'/>
                    <InputLabel htmlForName='password' labelText='Password'/>
                    <div className={classes.input__error}>
                        {passwordError && <Errormessage errorMessage={passwordError}/>}
                    </div>
                </div>
                <MyButton buttonText={'Login'}/>
                <div className={classes.authentication__error}>
                    {submitError && <Errormessage errorMessage={submitError}/>}
                </div>
            </form>
        </div>
    );
}

export default Login;