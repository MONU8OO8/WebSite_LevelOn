import { React, useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import './index.scss'
import DialogPopup from '../popup/index'
// import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VideocamIcon from '@mui/icons-material/Videocam'
// import Icon from '@mui/material/Icon'

const ServiceCard = ({ heading, description }) => {
    const [isEditPopupOpen, setEditPopupOpen] = useState(false)

    const openEditPopup = () => {
        setEditPopupOpen(true)
    }

    const closeEditPopup = () => {
        setEditPopupOpen(false)
    }

    return (
        <Card className="service__card" variant="outlined" >

            <Box className="service__card__content">
                <VideocamIcon />
                <Box className="service__card__content__text">
                    <Typography className="heading">{heading}</Typography>
                    <Typography className="description">{description}</Typography>
                </Box>
                <DeleteIcon className="delete-icon" />
            </Box>
            <hr className="horizontal-line" />
            <Box className="service__card__content__below">
                <Box className="service__card__content__below__first">
                    <Box className="service__card__content__below__first__price">
                        <Typography>30 Min</Typography>
                        <Typography>Duration</Typography>
                    </Box>
                    <hr className="small__line" />
                    <Box className="service__card__content__below__first__price">
                        <Typography>₹399</Typography>
                        <Typography>Price</Typography>

                    </Box>
                </Box>
                <Box onClick={openEditPopup} className="service__card__content__below__second">
                     
                    <EditIcon />
                    <Typography className="edit-text">Edit</Typography>
                 
                </Box>
            </Box>
            {isEditPopupOpen && (
                <DialogPopup open={isEditPopupOpen} onClose={closeEditPopup} />
            )}
        </Card>
    )
}

ServiceCard.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired, // Add onClick prop type
}

export default ServiceCard
