// TextInput.js
import React, { useState, memo, useEffect, useRef } from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const TextInput = memo((props) => {
    const {
        label,
        name,
        placeholder,
        type,
        error,
        errorText,
        eventHandler,
        onKeyDown,
        autoFocus,
        multiline,
        rows,
        autoComplete,
        value,
    } = props
    const [showPassword, setShowPassword] = useState(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if (autoFocus) {
            inputRef.current.focus()
        }
    }, [autoFocus])

    return (
        <>
            <InputLabel className="label" htmlFor="outlined-label">
                {label}
            </InputLabel>
            <TextField
                className="text-input"
                placeholder={placeholder}
                name={name}
                type={showPassword ? 'text' : type}
                error={error}
                helperText={errorText}
                multiline={multiline}
                rows={multiline ? rows : undefined}
                InputProps={{
                    endAdornment:
                        type === 'password' && (
                            <InputAdornment position="end" className="custom-adornment">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityIcon className="eyeicon" />
                                    ) : (
                                        <VisibilityOffIcon className="eyeicon" />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                }}
                onChange={eventHandler}
                onKeyDown={onKeyDown}
                inputRef={inputRef}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                value={value}
            />
        </>
    )
})

TextInput.displayName = 'TextInput'

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired,
    eventHandler: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    autoComplete: PropTypes.string,
    value: PropTypes.string
}

export default TextInput
