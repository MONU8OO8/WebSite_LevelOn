import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
// import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import TextInput from '../textinput'
import { TextField, Typography } from '@mui/material'
import MultiSelect from '../mutiSelect'
import DialogActions from '@mui/material/DialogActions'
import Button from '../button/index'
import './index.scss' // Import the SCSS file

const DialogPopup = ({ open, onClose }) => {
    const Expertise = [
        { label: 'Resume Review' },
        { label: 'Career Guidance' },
        { label: 'Mock Interview' },
        { label: 'Mentor Ship' },
        { label: 'Project Review' },
        { label: 'Let`s Connect' }

    ]
    return (
        <Dialog open={open} onClose={onClose} className="dialog__popup"> {/* Add the "dialog-popup" class */}
            {/* <DialogTitle>Add New Services</DialogTitle> */}
            <Box className="dialog__popup__content">
                <Typography className="dialog__popup__content__head">Add New Services</Typography>
                <Box sx={{ mb: '40px' }} />
                <TextInput label={'Service Title'} name="name" placeholder={' '} type={'text'} multiline />
                <Box sx={{ mb: '20px' }} />
                <TextInput label={'Description'} name="name" placeholder={' '} type={'text'} multiline
                    rows={4} />
                <Box sx={{ mb: '80px' }} />

                <MultiSelect
                    label={'Session Duration (mins)'}
                    name={'expertise'}
                    type={'text'}
                    options={Expertise}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            placeholder=' '
                            InputLabelProps={{ className: 'inputlabel-items' }}

                        />}
                    handleChange={((e) => e.target.value)}
                    fullWidth
                />

                <Box sx={{ mb: '20px' }} />

                <TextInput label={'Price (₹)'} name="name" placeholder={' '} type={'text'} multiline />

                <Box sx={{ mb: '20px' }} />

            </Box>
            <DialogActions className="dialog__popup__buttons">
                <Button label="Close" eventHandler={onClose} className="dialog-button" />
                <Button label="Save" eventHandler={onClose} className="dialog-button" />
            </DialogActions>
        </Dialog>
    )
}

DialogPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default DialogPopup
