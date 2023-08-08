import React from 'react'
import LoginWarpper from '../../containers/loginWrapper'
// import GetStarted from '../../components/getStarted'
import VerifyEmailComponent from '../../components/verifyemail'
// import EmailOtpComponent from '../../components/verifyEmailOtp'
// import SignupComponent from '../../components/signup'
import cogoToast from 'cogo-toast';
import { apiCall } from '../../utils/apiActions';
 
const Signup = () => {

    const SignUpEmail = (payload) => {
        const formdata = { email:payload.email };
        apiCall(
          (response) => {
            const {message, status} = response.data;
            if(status){
                cogoToast.success(message);
            } else {
                cogoToast.error(message);
            }
          },
          formdata,
          "SIGNUP"     
        );  
      };


    return (
        <LoginWarpper>
            {/* <SignupComponent/> */}
            <VerifyEmailComponent 
            SignUpEmail = {(payload) => SignUpEmail(payload)}
            />
            {/* <EmailOtpComponent /> */}
            {/* <GetStarted/> */}

        </LoginWarpper>
    )
}
export default Signup