import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import { Autocomplete, InputLabel } from '@mui/material'

const MultiSelect = (props) => {
    const { label, name, type, placeholder, options, renderInput, eventHandler } = props

    return (
        <>
            <InputLabel className="dropdown-label">{label}</InputLabel>

            <Autocomplete
                className="dropdown-input"
                name={name}
                type={type}
                options={options}
                placeholder={placeholder}
                renderInput={renderInput}
                onChange={eventHandler}
                multiple
                filterSelectedOptions
            />
        </>
    )
}

MultiSelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    renderInput: PropTypes.object.isRequired,
    eventHandler: PropTypes.func.isRequired,

}

export default MultiSelect
