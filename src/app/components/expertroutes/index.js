import React, { useState } from 'react'
import './index.scss'
import Grid from '@mui/material/Grid'
import Button from '../button/index'
import ExpertProfile from '../expertprofile/index'
import ExpertBackground from '../expertbackground/index'
import ExpertService from '../expertservice/index'
import ExpertFinish from '../expertfinish/index'
import Box from '@mui/material/Box'
import Expertcalendar from '../expertcalendar/index'
// import Expertcalendar from '../expertcalendar2/index'
import Steppers from '../stepper'

const steps = ['Profile', 'Background', 'Services', 'Calendar', 'Finish']

const ExpertRoutes = () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <ExpertProfile />
            case 1:
                return <ExpertBackground />
            case 2:
                return <ExpertService />
            case 3:
                return <Expertcalendar />
            default:
                // return <SkeekerFinish />
                return <ExpertFinish />
        }
    }

    return (
        <Grid className="student__profile">
            <Box width="50%">

                <Steppers activeStep={activeStep} steps={steps} />
            </Box>
            <Box sx={{ mb: '40px' }} />
            <Grid item xs={12} sm={6} md={activeStep === 2 ? 9 : activeStep === 3 ? 6 : 4} className="student__profile__container">
                {renderStepContent()}
            </Grid>
            <Box sx={{ mb: '20px' }} />
            <Grid item xs={12} sm={6} md={6} className="student__profile__button">
                {activeStep !== steps.length - 1 && (
                    <Grid className="student__profile__button__text">
                        <Button
                            label="BACK"
                            eventHandler={handleBack}
                            disabled={activeStep === 0}
                            className="back"
                        />
                    </Grid>
                )}
                <Grid className={`student__profile__button__${activeStep === steps.length - 1 ? 'finish' : 'text'}`}>
                    <Button

                        label={activeStep === steps.length - 1 ? 'Visit' : 'Next'}
                        eventHandler={handleNext}
                        disabled={activeStep === steps.length}
                        className={activeStep === steps.length - 1 ? 'finish' : 'next'}
                    />
                </Grid>
            </Grid>
            <Box sx={{ mb: '30px' }} />
        </Grid>
    )
}

export default ExpertRoutes
