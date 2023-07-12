import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import './index.scss'
import { LevelonLogo } from '../../utils/utilities.js/index.js'
import { HomeConstants } from '../../mock-data/constants'
import { TitleDescription } from '../../common/texts'
import ButtonComponent from '../../components/button'
// import Button from '../button/index' // Importing the custom ButtonComponent


const Home = () => {
    return (
        <Grid item xs={12} sm={6} md={12} container spacing={0} className="home" >
            <Grid className="home__top" item xs={12}>
                <Box className="home__top__container">
                    <LevelonLogo className="home__top__container__logo" />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={12} className="home__bottom" container>

                <Box className="home__bottom__container">
                    {TitleDescription(HomeConstants['title'], HomeConstants['description'])}
                    <Box className='home__bottom__container__button'>

                        <Box className="home__bottom__container__button__text">
                            <ButtonComponent
                                label="Login"
                                eventHandler={(e) => e.target.value}
                                link={'/login'}
                            />
                        </Box>
                        <Box className="home__bottom__container__button__text">
                            <ButtonComponent
                                label={'Signup'}
                                eventHandler={(e) => e.target.value}
                                link={'/signup'}
                            />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home
