import { Box, Typography } from '@mui/material'
import React from 'react'
import { ICONS } from '../../constants/icons'
import './index.scss'

const SeekerEducation = () => {
    return (
        <>
            <Box className='seeker-exp'>
                <Box className='seeker-exp__container'>
                    <img src={ICONS['COMPANYLOGO']} className='seeker-exp__container__logo' alt="logo" />

                    <Box className='seeker-exp__container__details'>
                        <Typography className='seeker-exp__container__details__role'> Ui UX Designer </Typography>
                        <Typography className='seeker-exp__container__details__compony'> BSC Computer Science </Typography>
                    </Box>

                </Box>
                <Box>
                    <Typography className='seeker-exp__container__details__compony'> 2019 - 2022 </Typography>
                </Box>
            </Box>
        </>
    )
}
export default SeekerEducation