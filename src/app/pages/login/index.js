import React from 'react'
import LoginWarpper from '../../containers/loginWrapper'
import LoginComponent from '../../components/login'

const Login = () => {
    return (
        <>
            <LoginWarpper>
                <LoginComponent/> 
            </LoginWarpper>
        </>

    )
}

export default Login
