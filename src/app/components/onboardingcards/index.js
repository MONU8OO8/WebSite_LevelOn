import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import './index.scss'

const CustomCard = ({ color, icon, borderColor, heading, description, onClick }) => {
    const cardStyle = {
        '--card-color': color,
        '--card-border-color': borderColor,
    }

    const handleCardClick = () => {
        onClick() // Call the onClick function passed as prop
    }

    return (
        <Card className="custom__card" variant="outlined" style={cardStyle} onClick={handleCardClick}>
            <Box className="custom__card__logo__container">
                <img className="icon" src={icon} alt="Icon" />
            </Box>
            <Box className="custom__card__content__container">
                <Typography className="heading">{heading}</Typography>
                <Typography className="description">{description}</Typography>
            </Box>
        </Card>
    )
}

CustomCard.propTypes = {
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired, // Add onClick prop type
}

export default CustomCard
