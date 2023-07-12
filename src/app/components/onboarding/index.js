import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import './index.scss'
import OnboardingCard from '../onboardingcards/index'
import { OnboardingTitelDes } from '../../common/texts'
import { OnboardingConstants } from '../../mock-data/constants'
import { ICONS } from '../../constants/icons'
import { COLORS } from '../../constants/colors'

const onboardingComponent = ({ setActiveComponent }) => {
    const handleCardClick = (componentName) => {
        setActiveComponent(componentName)
    }

    // Array of objects containing the heading and description values
    const cardData = [
        {
            heading: OnboardingConstants['seekercardhead'],
            description: OnboardingConstants['seekercarddes'],
            icon: ICONS.ONBOARDING1,
            color: COLORS.seekercardcolor,
            borderColor: COLORS.seekercardborder,
            onClick: () => handleCardClick('newComponent'),
        },
        {
            heading: OnboardingConstants['mentorcardhead'],
            description: OnboardingConstants['mentorcarddes'],
            icon: ICONS.ONBOARDING2,
            color: COLORS.mentorcardcolor,
            borderColor: COLORS.mentorcardborder,
            onClick: () => handleCardClick('anotherComponent'),
        },
    ]

    return (
        <Grid className="onboarding">
            <Box className="onboarding__section">
                {OnboardingTitelDes(OnboardingConstants['title'], OnboardingConstants['description'])}
                <Grid className="onboarding__card">
                    {cardData.map((card, index) => (
                        <Grid key={index}>
                            <OnboardingCard
                                color={card.color}
                                icon={card.icon}
                                borderColor={card.borderColor}
                                heading={card.heading}
                                description={card.description}
                                onClick={card.onClick}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Grid>
    )
}

onboardingComponent.propTypes = {
    setActiveComponent: PropTypes.func.isRequired,
}

export default onboardingComponent
