// DialogPopup.js
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import TextInput from '../textinput'
import { Typography } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import Button from '../button/index'
import './index.scss'

const DialogPopup = ({ open, onClose, addServiceCard }) => {
    // const Expertise = [
    //     { label: 'Resume Review' },
    //     { label: 'Career Guidance' },
    //     { label: 'Mock Interview' },
    //     { label: 'Mentor Ship' },
    //     { label: 'Project Review' },
    //     { label: 'Let`s Connect' },
    // ]
    // const Mins = Array.from({ length: 12 }, (_, index) => ({
    //     label: `${index}`,
    // }))

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [min, setMin] = useState('')


    const handleSave = () => {
        addServiceCard(title, description, price, min)
        onClose()
    }


    return (
        <Dialog open={open} onClose={onClose} className="dialog__popup">
            <Box className="dialog__popup__content">
                <Typography className="dialog__popup__content__head">
                    Add New Services
                </Typography>
                <Box sx={{ mb: '40px' }} />
                <TextInput
                    label={'Service Title'}
                    name="name"
                    placeholder={' '}
                    type={'text'}
                    multiline
                    value={title}
                    eventHandler={(e) => setTitle(e.target.value)}
                />
                <Box sx={{ mb: '20px' }} />
                <TextInput
                    label={'Description'}
                    name="name"
                    placeholder={' '}
                    type={'text'}
                    multiline
                    rows={4}
                    value={description}
                    eventHandler={(e) => setDescription(e.target.value)}
                />
                <Box sx={{ mb: '80px' }} />

                <TextInput
                    label={'Session Duration  (mins)*'}
                    name="min"
                    placeholder={' '}
                    type={'text'}
                    multiline
                    value={min}
                    eventHandler={(e) => setMin(e.target.value)}
                />

                <Box sx={{ mb: '20px' }} />

                <TextInput
                    label={'Price (₹)'}
                    name="price"
                    placeholder={' '}
                    type={'text'}
                    multiline
                    value={price}
                    eventHandler={(e) => setPrice(e.target.value)}
                />

                <Box sx={{ mb: '20px' }} />
            </Box>
            <DialogActions className="dialog__popup__buttons">
                <Button label="Close" eventHandler={onClose} className="back" />
                <Button label="Save" eventHandler={handleSave} className="dialog-button" />

            </DialogActions>
        </Dialog>
    )
}

DialogPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    addServiceCard: PropTypes.func.isRequired,
}

export default DialogPopup
