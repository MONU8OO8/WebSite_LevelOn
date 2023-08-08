import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const ButtonComponent = (props) => {
    const { label, eventHandler, link, keyHandler, disabled, className } = props
    return (
        <>
            <Button className={`primary-btn ${className}`} onKeyDown={keyHandler} onClick={eventHandler} variant="contained" component={Link} to={link} disabled={disabled}>{label}</Button>
        </>
    )
}

ButtonComponent.propTypes = {
    label: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    eventHandler: PropTypes.func.isRequired,
    keyHandler: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
}

export default ButtonComponent