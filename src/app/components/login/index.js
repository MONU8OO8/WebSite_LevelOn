import React, { useEffect, useState } from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import SocialLogin from '../../common/social'
import { OrSeprator } from '../../utils/utilities.js'
import TextInput from '../textinput'
import ButtonComponent from '../button'
import { LoginConstants } from '../../mock-data/constants'
import { validateForm } from '../../utils/config'
import { ErrorCheck } from '../../utils/services'
import Toast from '../../common/toast'
import { ForgotPass, TitleDescription, signupAccount } from '../../common/texts'
   
const LoginComponent = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [buttonEnabled, setButtonEnabled] = useState(false)

    useEffect(() => {
        setButtonEnabled(formData.email !== '' && formData.password !== '')
    }, [formData.email][formData.password])

    const handleFormSubmit = () => {
        console.log(validateForm(formData))
        const validationErrors = validateForm(formData)

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors)
            // Proceed with form submission
            // ...
        } else {
            setErrors({})
            setFormData({ email: '', password: '' })
        }
    }

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleFormSubmit()
        }
    }

    return (
        <>
            <Grid
                className="login"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box className="login__section">
                    {TitleDescription(
                        LoginConstants['title'],
                        LoginConstants['description'],
                    )}
                    <SocialLogin />
                    {OrSeprator()}
                    <TextInput
                        label={'Email'}
                        name="email"
                        placeholder={'Enter your Email'}
                        from={'signup'}
                        value={formData.email}
                        type={'email'}
                        error={ErrorCheck(errors.email)}
                        errorText={errors.email}
                        eventHandler={handleChange}
                        autoFocus={true}
                        onKeyDown={handleKeyDown}
                        autoComplete={'off'}
                    />
                    <Box sx={{ mb: '20px' }} />
                    <TextInput
                        label={'Password'}
                        name="password"
                        placeholder={'Enter your Password'}
                        from={'signup'}
                        value={formData.password}
                        type={'password'}
                        error={ErrorCheck(errors.password)}
                        errorText={errors.password}
                        eventHandler={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    {LoginConstants['isForgotPassword'] &&
                        ForgotPass('Forgot password?')}
                    <Box className={`setpass-btn__${!buttonEnabled ? 'disable' : 'enable'}`}>
                        <ButtonComponent
                            label={'Continue'}
                            from={'signup'}
                            eventHandler={handleFormSubmit}
                            disabled={!buttonEnabled}
                            className={!buttonEnabled ? 'disable' : 'enable'}
                        />
                    </Box>
                    <Box sx={{ mb: '24px' }} />
                    {signupAccount(
                        LoginConstants['accountTitle'],
                        LoginConstants['accountLink'],
                    )}
                </Box>
            </Grid>
            <Toast />
        </>
    )
}
LoginComponent.propTypes = {
    handleShowToast: PropTypes.func.isRequired,
}

export default LoginComponent
