import React from 'react'
import LoginWarpper from '../../containers/loginWrapper'
import LoginComponent from '../../components/login'
import cogoToast from 'cogo-toast';
import { apiCall } from '../../utils/apiActions';

const Login = () => {
    const SignIn = (payload) => {
        const formdata = { email:payload.email }
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
          "LOGIN"     
        );  
      };

return (
   
        <LoginWarpper>
            <LoginComponent
            SignIn = {(payload) => SignIn(payload)} />
        </LoginWarpper>


)     
}
export default Login
