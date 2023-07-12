// import React, { useState } from 'react'
import React from 'react'
import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
import { Typography, Avatar } from '@mui/material'
import './index.scss'
import { ICONS } from '../../constants/icons'

const SkeekerFinish = () => {

    return (
        <Box className="seeker">
            <Box sx={{ mb: '40px' }} />
            <Box className="seeker__finish">
                <Box className="seeker__finish__logo">
                    <Avatar className="icon" src={ICONS['FINISH']} />
                </Box>
                <Box sx={{ mb: '20px' }} />
                <Typography className="seeker__finish__heading">
                    Congratulations!
                </Typography>
                <Box sx={{ mb: '20px' }} />
                <Typography className="seeker__finish__description">
                    You have successfully onboarded, you can start explore your mentors!
                </Typography>
            </Box>
            <Box sx={{ mb: '20px' }} />

        </Box>

    )
}

export default SkeekerFinish