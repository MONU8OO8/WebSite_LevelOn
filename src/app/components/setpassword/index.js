import React, { useEffect, useState } from 'react'
import './index.scss'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { TitleDescription } from '../../common/texts'
import { ForgotPassConstants } from '../../mock-data/constants'
import TextInput from '../textinput'
import PasswordStrengthBar from 'react-password-strength-bar'
import ButtonComponent from '../button'
import { validateForm } from '../../utils/config'
import { ErrorCheck } from '../../utils/services'

const SetPassword = () => {
    const [buttonEnabled, setButtonEnabled] = useState(false)


    const [formData, setFormData] = useState({

        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setButtonEnabled(formData.password !== '' && formData.confirmPassword !== '')
    }, [formData.password, formData.confirmPassword])




    const handleFormSubmit = () => {
        console.log(validateForm(formData))
        const validationErrors = validateForm(formData)

        if (Object.keys(validationErrors).length !== 0) {

            setErrors(validationErrors)

        }
        else {
            setErrors({})
            setFormData({ password: '' , confirmPassword: '' })
            alert('success')
        }
        setButtonEnabled(formData.password !== '' && formData.confirmPassword !== '')
    }

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleFormSubmit()
        }
    }


    return (
        <>
            <Grid className='setpass' display="flex" justifyContent="center" alignItems="center">
                <Box className='setpass__section'>
                    {TitleDescription(ForgotPassConstants['title'], ForgotPassConstants['description'])}
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
                    <Box sx={{ mb: '24px' }} />

                    <TextInput
                        label={'Confirm Password'}
                        name="confirmPassword"
                        placeholder={'Confirm your Password'}
                        from={'signup'}
                        value={formData.confirmPassword}
                        type={'password'}
                        error={ErrorCheck(errors.confirmPassword)}
                        errorText={errors.confirmPassword}
                        eventHandler={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <Box sx={{ mb: '24px' }} />
                    <PasswordStrengthBar
                        password={formData.password}
                        minLength={8}
                        scoreWords={['Weak', 'Weak', 'Okey', 'Good', 'Strong']}
                        shortScoreWord='Weak'

                    />
                    <Box sx={{ mb: '24px' }} />
                    <Box className={`setpass-btn__${!buttonEnabled ? 'disable' : 'enable'}`}>
                        <ButtonComponent
                            label={'Set Password'}
                            from={'signup'}
                            eventHandler={handleFormSubmit}
                            disabled={!buttonEnabled}
                            className={!buttonEnabled ? 'disable' : 'enable'}
                        />
                    </Box>
                    <Box sx={{ mb: '24px' }} />
                </Box>
            </Grid>
            {/* <Toast/> */}
        </>
    )
}

// SetPassword.PropTypes = {
//     handleShowToast: PropTypes.func.isRequired,
// }

export default SetPassword
