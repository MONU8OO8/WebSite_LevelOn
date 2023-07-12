import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import './index.scss'
import { LevelonLogo } from '../../utils/utilities.js/index.js'
// import RenderActiveComponent from '../onboardingroutes'

const Onboardingwrapper = ({ children }) => {
    return (
        <Grid className="layout" container spacing={0}>
            <Grid className="layout__top" item xs={12}>
                <Box className="layout__top__container">
                    <LevelonLogo className="layout__top__container__logo" />
                </Box>
            </Grid>
            <Grid className="layout__bottom" container item xs={12}>
                <Box className="layout__bottom__container">
                    {children}
                </Box>
            </Grid>
        </Grid>
    )
}

Onboardingwrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Onboardingwrapper
