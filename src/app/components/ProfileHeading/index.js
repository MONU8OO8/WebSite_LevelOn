import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import './index.scss'
import PropTypes from 'prop-types'

const ProfileHeading = ({ heading, children }) => {
    return (
        <Card className='skill-card' variant='outlined'>
            <Box className='skill-card__items'>
                <Typography className='skill-card__items__header'>{heading}</Typography>
                <Box>
                    <EditIcon />
                </Box>

            </Box>
            <Box>
                {children}
            </Box>

        </Card>
    )
}
ProfileHeading.PropTypes = {
    heading: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired,

}
export default ProfileHeading
