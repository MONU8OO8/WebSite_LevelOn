import React, { useEffect, useState } from 'react'
import './index.scss'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ButtonComponent from '../button'
import { HaveAccount, TitleDescription } from '../../common/texts'
import OtpInput from '../../common/otpinput'
import { OtpConstants, SignupConstants } from '../../mock-data/constants'
import { validateForm } from '../../utils/config'
import { ErrorCheck } from '../../utils/services'
import { Typography } from '@mui/material'


const EmailOtpComponent = () => {

    const [otp, setOtp] = useState('')
    const [buttonEnabled, setButtonEnabled] = useState(false)
    const [error, setError] = useState({})
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1)
        }, 1000)

        if (timer === 0) {
            clearInterval(countdown)
            setError('Resend OTP')
        }

        return () => {
            clearInterval(countdown)
        }
    }, [timer])



    useEffect(() => {
        setButtonEnabled(otp !== '')
    }, [otp])

    const handleChange = (newValue) => {
        setOtp(newValue)
    }
    const handleSubmit = () => {
        console.log(validateForm(error))
        const validationErrors = validateForm(error)

        if (Object.keys(validationErrors).length !== 0) {
            setError(validationErrors)
        } else {
            setError({})
            setOtp('')
            alert('success')
        }
        setButtonEnabled(otp !== '')


    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleResend = () => {
        setTimer(30) // Reset the timer to 30 seconds
        setError('')
        // Add your logic here to resend the OTP
        // This can be an API call or any other method to send the OTP again
    }


    return (
        <>
            <Grid className='verifyotp' display="flex" justifyContent="center" alignItems="center">
                <Box className='verifyotp__section'>
                    {TitleDescription(OtpConstants['title'], OtpConstants['description'])}

                    <Box sx={{ mb: '24px' }} />

                    <Box >
                        <OtpInput
                            label={'OTP'}
                            value={otp}
                            length={6}
                            name={'otp'}
                            from={'signup'}
                            type={'number'}
                            errorText={error}
                            error={ErrorCheck(error)}
                            eventHandler={handleChange}
                            onKeyDown={handleKeyDown}
                            autoFocus={true}

                        />
                    </Box>
                    <Box sx={{ mb: '20px' }} />

                    {timer === 0 ? (
                        <Box sx={{ mb: '24px' }} className='otp-timer'>

                            <button type="button" onClick={handleResend} className='otp-expired'>
                                Resend OTP
                            </button>
                        </Box>
                    ) : (
                        <Box sx={{ mb: '24px' }} className='otp-timer'>
                            <Typography className='otp-resend'>
                                Resend OTP in {timer}s
                            </Typography>
                        </Box>
                    )}
                    <Box sx={{ mb: '20px' }} />
                    <Box className={`setpass-btn__${!buttonEnabled ? 'disable' : 'enable'}`}>
                        <ButtonComponent
                            label={'Verify OTP'}
                            from={'signup'}
                            eventHandler={handleSubmit}
                            disabled={!buttonEnabled}
                            className={!buttonEnabled ? 'disable' : 'enable'}
                        />
                    </Box>

                    <Box sx={{ mb: '24px' }} />
                    {HaveAccount(SignupConstants['accountTitle'], SignupConstants['accountLink'])}


                    <Box sx={{ mb: '24px' }} />
                </Box>
            </Grid>
        </>
    )
}

export default EmailOtpComponent
