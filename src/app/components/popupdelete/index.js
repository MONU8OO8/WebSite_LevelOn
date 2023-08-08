// DialogDeletePopup.js
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import Button from '../button/index'
import './index.scss'

const DialogDeletePopup = ({ open, onClose, onDelete }) => { // Add onDelete prop

    const handleDelete = () => {
        onDelete()
        onClose()
    }

    return (
        <Dialog open={open} onClose={onClose} className="dialog__deletepopup">
            <Box className="dialog__deletepopup__head">
                <Typography className="dialog__deletepopup__head__title">
                    Delete Service
                </Typography>
            </Box>
            <Box sx={{ mb: '20px' }} />
            <Box className="dialog__deletepopup__content">
                <Typography className="dialog__deletepopup__content__head">
                    Are you sure do you want to delete this services ?
                </Typography>
                <Typography className="dialog__deletepopup__content__des">
                    “Interview Preparation”
                </Typography>
            </Box>
            <Box sx={{ mb: '20px' }} />
            <DialogActions className="dialog__deletepopup__buttons">
                <Button label="Close" eventHandler={onClose} className="back" />
                <Button label="Delete" eventHandler={handleDelete} className="dialog-button" />
            </DialogActions>
        </Dialog>
    )
}

DialogDeletePopup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired, // Add the onDelete prop
}

export default DialogDeletePopup
