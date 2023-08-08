// import React, { useState } from 'react'
import React from 'react'
import Box from '@mui/material/Box'
import { Typography, Avatar } from '@mui/material'
import './index.scss'
import { ICONS } from '../../constants/icons'
import StepperVertical from '../steppervertical'

const ExpertFinish = () => {

    return (
        <Box className="expert">
            <Box sx={{ mb: '40px' }} />
            <Box className="expert__finish">
                <Box className="expert__finish__logo">
                    <Avatar className="icon" src={ICONS['FINISH']} />
                </Box>
                <Box sx={{ mb: '20px' }} />
                <Typography className="expert__finish__heading">
                    We received your application
                </Typography>
                <Box sx={{ mb: '20px' }} />
                <Box sx={{ mb: '20px' }} />
                <StepperVertical />

            </Box>

        </Box>

    )
}

export default ExpertFinish