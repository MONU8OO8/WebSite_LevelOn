import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar, IconButton, Typography,Avatar  } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import './index.scss'
import { ICONS } from '../../constants/icons'


const Toast = ({ open, message, handleClose }) => {
    return (
        <Snackbar src={ICONS['GOOGLEICON']}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <Typography className="toast">
                <Avatar className="icon" src={ICONS['TOASTICON']} />
                <Typography className="message">{message}</Typography>
                <IconButton className="close" size="small" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Typography>
        </Snackbar>
    )
}

Toast.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.node.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default Toast
