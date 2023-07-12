import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '../button/index'
import DialogPopup from '../popup/index'
import './index.scss'
import ServiceCard from '../servicecards/index'
import { OnboardingConstants } from '../../mock-data/constants'
import { Typography } from '@mui/material'

const ServiceComponent = () => {
    const [isDialogOpen, setDialogOpen] = useState(false)

    const openDialog = () => {
        setDialogOpen(true)
    }

    const closeDialog = () => {
        setDialogOpen(false)
    }

    const cardData = [
        {
            heading: OnboardingConstants['servicecardhead'],
            description: OnboardingConstants['servicecarddes'],
        },
        {
            heading: OnboardingConstants['mentorcardhead'],
            description: OnboardingConstants['mentorcarddes'],
        },
    ]

    return (
        <Grid className="service">
            <Box className="service__section">
                <Box className="service__section__button">
                    <Typography>Select Services</Typography>
                    <Grid className="service__section__button__add">
                        <Button
                            label="Add New Services"
                            className="addbutton"
                            eventHandler={openDialog}
                        />
                    </Grid>
                </Box>
                <hr className="service__section__line" />
                <Grid className="service__content">
                    {cardData.map((card, index) => (
                        <Grid key={index}>
                            <ServiceCard
                                heading={card.heading}
                                description={card.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <DialogPopup open={isDialogOpen} onClose={closeDialog} />
        </Grid>
    )
}

export default ServiceComponent
