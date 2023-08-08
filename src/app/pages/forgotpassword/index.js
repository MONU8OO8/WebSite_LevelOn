import React from 'react'
import LoginWarpper from '../../containers/loginWrapper'
// import SetPassword from '../../components/setpassword'
import ForgotPassComponent from '../../components/forgotpassword'
// import VerifyOtp from '../../components/sendotp'

const ForgotPass = () => {

    return (
        <>
            <LoginWarpper>
                {/* <SetPassword/> */}
                <ForgotPassComponent />
                {/* <VerifyOtp/> */}
            </LoginWarpper>
        </>

    )
}

export default ForgotPass    
