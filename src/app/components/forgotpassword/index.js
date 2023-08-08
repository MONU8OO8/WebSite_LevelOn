import React, { useState, useEffect } from 'react'
import './index.scss'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextInput from '../textinput'
import { VerifyOtpConstants } from '../../mock-data/constants'
import { TitleDescription } from '../../common/texts'
import ButtonComponent from '../button'
import { validateForm } from '../../utils/config'
import { ErrorCheck } from '../../utils/services'


const ForgotPassComponent = () => {
    const [formData, setFormData] = useState({ email: '' })
    const [errors, setErrors] = useState({})
    const [buttonEnabled, setButtonEnabled] = useState(false)

    useEffect(() => {
        setButtonEnabled(formData.email !== '')
    }, [formData.email])

    const handleFormSubmit = () => {
        console.log(validateForm(formData))
        const validationErrors = validateForm(formData)

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})
        }
        alert('success')

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
            <Grid className='forgotpass' display="flex" justifyContent="center" alignItems="center">
                <Box className='forgotpass__section'>
                    <Box sx={{ mb: '24px' }} />

                    {TitleDescription(VerifyOtpConstants['title'])}
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
                    <Box className={`setpass-btn__${!buttonEnabled ? 'disable' : 'enable'}`}>
                        <ButtonComponent
                            label={'Send OTP'}
                            from={'signup'}
                            eventHandler={handleFormSubmit}
                            disabled={!buttonEnabled}
                            className={!buttonEnabled ? 'disable' : 'enable'}
                        />
                    </Box>

                    <Box sx={{ mb: '24px' }} />
                </Box>
            </Grid>
        </>
    )
}

export default ForgotPassComponent