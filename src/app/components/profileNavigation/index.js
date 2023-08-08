import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import Button from '../button/index'
import CloseIcon from '@mui/icons-material/Close'
import './index.scss'

const ProfileNavbar = ({ open, onClose }) => {

    return (
        <Box>
            <Dialog open={open} onClose={onClose} className="popup">
                <Box className="popup__content">
                    <Box className="popup__content__header">
                        <Box className="popup__content__header__top">
                            <Typography>Edit Profile</Typography>
                            <CloseIcon />
                        </Box>
                        <Box sx={{ mb: '20px' }} />
                        <Box className="popup__content__header__bottom">
                            <Typography className="popup__content__header__bottom__title"> About me </Typography>
                            <Typography className="popup__content__header__bottom__title"> Skills </Typography>
                            <Typography className="popup__content__header__bottom__title"> Experience </Typography>
                            <Typography className="popup__content__header__bottom__title"> Education </Typography>

                        </Box>
                    </Box>
                    <Box sx={{ mb: '20px' }} />
                </Box>
                <DialogActions className="popup__buttons">
                    <Button label="Cancel" eventHandler={onClose} className="back" />
                    <Button label="Save" eventHandler={open} className="dialog-button" />
                </DialogActions>
            </Dialog>
        </Box>
    )
}
ProfileNavbar.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}
export default ProfileNavbar

