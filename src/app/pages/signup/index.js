import React from 'react'
import LoginWarpper from '../../containers/loginWrapper'
// import GetStarted from '../../components/getStarted'
// import VerifyEmailComponent from '../../components/verifyemail'
import EmailOtpComponent from '../../components/verifyEmailOtp'
// import SignupComponent from '../../components/signup'
const Signup = ()=>{
    return(
        <LoginWarpper>
            {/* <SignupComponent/> */}
            {/* <VerifyEmailComponent /> */}
            <EmailOtpComponent />
            {/* <GetStarted/> */}

        </LoginWarpper>
    )
}
export default Signup