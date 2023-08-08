import { Box, Typography } from '@mui/material'
import React from 'react'
import { ICONS } from '../../constants/icons'
import './index.scss'

const SeekerExperience = () => {
    return (
        <>
            <Box className='seeker-exp'>
                <Box className='seeker-exp__container'>
                    <img src={ICONS['COMPANYLOGO']} className='seeker-exp__container__logo' alt="logo" />

                    <Box className='seeker-exp__container__details'>
                        <Typography className='seeker-exp__container__details__role'> Ui UX Designer </Typography>
                        <Typography className='seeker-exp__container__details__compony'> Levelon </Typography>
                        <Typography className='seeker-exp__container__details__compony'> Bengaluru, Karnataka, India </Typography>
                        <Typography className='seeker-exp__container__details__compony'> I am UI UX Designer in Levelon </Typography>

                    </Box>

                </Box>
                <Box>
                    <Typography className='seeker-exp__container__details__compony'> April 2023 - Present </Typography>
                </Box>
            </Box>
        </>
    )
}
export default SeekerExperience