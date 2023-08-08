import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import './index.scss'
import EditPopup from '../popupedit/index'
import DialogDeletePopup from '../popupdelete/index'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VideocamIcon from '@mui/icons-material/Videocam'

const ServiceCard = ({ heading, description, price, min, onDelete }) => {
  const [isEditPopupOpen, setEditPopupOpen] = useState(false)
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false)
  const [editedData, setEditedData] = useState({
    title: heading,
    description: description,
    price: price,
    min: min,
  })

  const openEditPopup = () => {
    setEditPopupOpen(true)
  }

  const closeEditPopup = () => {
    setEditPopupOpen(false)
  }

  const openDeletePopup = () => {
    setDeletePopupOpen(true)
  }

  const closeDeletePopup = () => {
    setDeletePopupOpen(false)
  }

  const handleUpdate = (updatedData) => {
    setEditedData(updatedData)
  }

  return (
    <Card className="service__card" variant="outlined">
      <Box className="service__card__content">
        <Box className="service__card__content__text">
          <VideocamIcon />
          <Box className="service__card__content__text__headDes">
            <Typography className="heading">{editedData.title}</Typography>
            <Typography className="description">{editedData.description}</Typography>
          </Box>
        </Box>
        <DeleteIcon className="delete-icon" onClick={openDeletePopup} />
      </Box>
      <hr className="horizontal-line" />
      <Box className="service__card__content__below">
        <Box className="service__card__content__below__first">
          <Box className="service__card__content__below__first__price">
            <Typography>{editedData.min} Min</Typography>
            <Typography>Duration</Typography>
          </Box>
          <hr className="small__line" />
          <Box className="service__card__content__below__first__price">
            <Typography>{editedData.price}</Typography>
            <Typography>Price</Typography>
          </Box>
        </Box>
        <Box onClick={openEditPopup} className="service__card__content__below__second">
          <EditIcon />
          <Typography className="edit-text">Edit</Typography>
        </Box>
      </Box>
      {isEditPopupOpen && (
        <EditPopup
          open={isEditPopupOpen}
          onClose={closeEditPopup}
          onUpdate={handleUpdate}
          initialData={{
            title: editedData.title,
            description: editedData.description,
            price: editedData.price,
            min: editedData.min,
          }}
        />
      )}
      {isDeletePopupOpen && (
        <DialogDeletePopup open={isDeletePopupOpen} onClose={closeDeletePopup} onDelete={onDelete} />
      )}
    </Card>
  )
}

ServiceCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ServiceCard