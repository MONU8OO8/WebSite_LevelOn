import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import TextInput from '../textinput'
import { Typography } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import Button from '../button/index'
import './index.scss'

const EditPopup = ({ open, onClose, onUpdate, initialData }) => {
  const [editedData, setEditedData] = useState(initialData)

  const handleSave = () => {
    onUpdate(editedData)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} className="edit__popup">
      <Box className="edit__popup__content">
        <Typography className="edit__popup__content__head">
          Edit Your Services
        </Typography>
        <Box sx={{ mb: '40px' }} />
        <TextInput
          label={'Service Title'}
          name="name"
          placeholder={' '}
          type={'text'}
          multiline
          value={editedData.title}
          eventHandler={(e) => setEditedData({ ...editedData, title: e.target.value })}
        />
        <Box sx={{ mb: '20px' }} />
        <TextInput
          label={'Description'}
          name="name"
          placeholder={' '}
          type={'text'}
          multiline
          rows={4}
          value={editedData.description}
          eventHandler={(e) => setEditedData({ ...editedData, description: e.target.value })}
        />
        <Box sx={{ mb: '80px' }} />

        <TextInput
          label={'Session Duration  (mins)*'}
          name="min"
          placeholder={' '}
          type={'text'}
          multiline
          value={editedData.min}
          eventHandler={(e) => setEditedData({ ...editedData, min: e.target.value })}
        />

        <Box sx={{ mb: '20px' }} />

        <TextInput
          label={'Price (₹)'}
          name="price"
          placeholder={' '}
          type={'text'}
          multiline
          value={editedData.price}
          eventHandler={(e) => setEditedData({ ...editedData, price: e.target.value })}
        />

        <Box sx={{ mb: '20px' }} />
      </Box>
      <DialogActions className="edit__popup__buttons">
        <Button label="Close" eventHandler={onClose} className="back" />
        <Button label="Save" eventHandler={handleSave} className="dialog-button" />
      </DialogActions>
    </Dialog>
  )
}

EditPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
  }).isRequired,
}

export default EditPopup