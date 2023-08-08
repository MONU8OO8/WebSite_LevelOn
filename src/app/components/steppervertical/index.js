import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
// import Typography from '@mui/material/Typography'
import './index.scss'

const steps = [
    {
        label: 'Application Submitted',
    },
    {
        label: 'Awaiting Review',
    },
    {
        label: 'Application Approved',
    },
]

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0)
    const intervalRef = useRef()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            if (prevActiveStep === steps.length) {
                clearInterval(intervalRef.current) // Stop at the last step
                return prevActiveStep
            }
            return prevActiveStep + 1
        })
    }

    useEffect(() => {
        intervalRef.current = setInterval(handleNext, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical" className="custom__stepper_vertical">
                {steps.map((step) => (
                    <Step key={step.label}>
                        <StepLabel
                        // optional={
                        //     index === 2 ? (
                        //         <Typography variant="caption">Last step</Typography>
                        //     ) : null
                        // }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {/* Remove the description here */}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}
