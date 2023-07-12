import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import {InputLabel } from '@mui/material'
import { MuiOtpInput } from 'mui-one-time-password-input'



const OtpInput = (props) => {
    const { label, value, length, name, type,error, errorText, eventHandler,autoFocus } = props




    return (
        <>
            <InputLabel className="otplabel">{label}</InputLabel>

            <MuiOtpInput
                className='otpinput'
                label={label}
                value={value}
                length={length}
                name={name}
                type={type}
                error={error}
                errorText={errorText}
                onChange={eventHandler}
                autoFocus={autoFocus}
            />
        </>
    )
}

OtpInput.displayName = 'OtpInput'

OtpInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool, // Add autoFocus prop type


    eventHandler: PropTypes.func.isRequired
}

export default OtpInput
