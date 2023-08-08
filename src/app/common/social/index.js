import React from 'react'
import './index.scss'
import Button from '@mui/material/Button'
import { ICONS } from '../../constants/icons'
import { LoginSocialGoogle } from 'reactjs-social-login'

const SocialLogin = () => {
    return (
        <LoginSocialGoogle
            client_id={'880559771850-jp61tnsmu2a4btna8nci3nlgu8tio4tk.apps.googleusercontent.com'}
            scope='openid profile email'
            discoveryDocs='claims_supported'
            access_type='offline'
            onResolve={({ provider, data }) => {
                console.log(provider, data)
            }}
            onReject={(err) => {
                console.log(err)
            }}
        >
            <Button className='social' variant="outlined" startIcon={<img width="34" height="34" src={ICONS['GOOGLEICON']} alt="logo" />}>
                Sign In with Google
            </Button>
        </LoginSocialGoogle>
    )
}
export default SocialLogin




