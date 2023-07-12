import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import { Autocomplete, InputLabel } from '@mui/material'



const SingleSelect = (props) => {
    const { label, name, type, placeholder, options, renderInput, eventHandler } = props



    return (
        <>
            <InputLabel className="dropdown-label">{label}</InputLabel>

            <Autocomplete
                disablePortal
                clearIcon={null}

                className="dropdown-input"
                name={name}
                type={type}
                options={options}
                placeholder={placeholder}
                renderInput={renderInput}
                onChange={eventHandler}
            />
        </>
    )
}

SingleSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    renderInput: PropTypes.func.isRequired,
    eventHandler: PropTypes.func.isRequired
}

export default SingleSelect
