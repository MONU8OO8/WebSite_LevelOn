import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import './index.scss'
import { CarasolInImages, ICONS } from '../../constants/icons'
import { GetCurrentResolution } from '../../utils/config'
import { LoginLeftConstants } from '../../mock-data/constants'
import { ImgTitle } from '../../common/texts'
import { LevelonLogo } from '../../utils/utilities.js/index.js'

const LoginWarpper = ({ children }) => {

    return (
        <>
            <Grid className="Layout" container spacing={0}>
                <Grid className="Layout__right" item xs={GetCurrentResolution() === 'mobile' ? 0 : 4.5}>
                    <Box className="Layout__right__container">
                        <LevelonLogo />
                        {ImgTitle(LoginLeftConstants['title'], LoginLeftConstants['description'])}
                        <img src={CarasolInImages['LevelUp']} alt="image" className="Layout__right__container__background" />
                    </Box>
                </Grid>
                <Grid className="Layout__left" container item xs={GetCurrentResolution() === 'mobile' ? 12 : 7.5}>
                    {GetCurrentResolution() === 'mobile' && (
                        <Box className="Layout__left__container">
                            <img src={ICONS['COMPANYLOGO']} className="Layout__left__container__logo" alt="logo" />
                        </Box>
                    )}
                    {children}
                    <Box sx={{ mb: { xs: '40px', sm: '0px' } }} />
                </Grid>
            </Grid>
        </>
    )
}

LoginWarpper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LoginWarpper
