import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
// import Typography from '@mui/material/Typography'
import './index.scss'
import { COLORS } from '../../constants/colors'

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: COLORS.Amaranth,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: COLORS.Amaranth,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#D9D9D9',
        borderTopWidth: 3,
        borderRadius: 2,
        maxWidth: 30,
        marginLeft: 'calc(50% - 16px)'
    },
}))

const Steppers = ({ activeStep, steps }) => {
    const isStepOptional = (step) => {
        return step === 1
    }

    return (
        <Box sx={{ width: '100%' }} display="flex" justifyContent="center">
            <Stepper activeStep={activeStep} connector={<QontoConnector />} className="custom__stepper">
                {steps.map((label, index) => {
                    const stepProps = {}
                    const labelProps = {}
                    if (isStepOptional(index)) {
                        labelProps.optional = null
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel className='custom__stepper__stepp' {...labelProps}>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
        </Box>
    )
}

Steppers.propTypes = {
    activeStep: PropTypes.number.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Steppers
