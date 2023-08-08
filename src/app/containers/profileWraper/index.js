import React from 'react'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import './index.scss'

const ProfileWrapper = ({ children }) => {
    return (
        <>
            <Box className='profile'>
                {children}
            </Box>
 
        </>
    )
}
ProfileWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProfileWrapper