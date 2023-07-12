import React, { useState } from 'react'
import './index.scss'
import Grid from '@mui/material/Grid'
import Button from '../button/index'
import SeekerProfile from '../seekerprofile/index'
import SeekerSkill from '../seekerskills/index'
import SkeekerStory from '../seekerstory/index'
import Box from '@mui/material/Box'
import SkeekerFinish from '../seekerfinish/index'
import Steppers from '../stepper'

const steps = ['Profile', 'Skills', 'Story', 'Finish']

const SeekerRoutes = () => {
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
            return <SeekerProfile />
        case 1:
            return <SeekerSkill />
        case 2:
            return <SkeekerStory />
        default:
            return <SkeekerFinish />
        }
    }

    return (
        <Grid className="student__profile">
            <Box width="40%">

                <Steppers activeStep={activeStep} steps={steps} />
            </Box>
            <Box sx={{ mb: '40px' }} />
            <Grid item xs={12} sm={6} md={4} className="student__profile__container">
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

                        label={activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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

export default SeekerRoutes
