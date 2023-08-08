import React, { useState } from 'react'
import { Avatar, Box, Button, Card, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import './index.scss'
import { ICONS } from '../../constants/icons'
import EditSeekerProfile from '../editSeekerProfile'
import PropTypes from 'prop-types'
import ProfileNavbar from '../profileNavigation'
const EditProfile = () => {
    const [isDialogOpen, setDialogOpen] = useState(false)

    const openDialog = () => {
        setDialogOpen(true)
    }
    const closeDialog = () => {
        setDialogOpen(false)
    }


    return (
        <Card className='profile-card' variant='outlined'>
            <Box className='profile-card__items'>
                <Box className='profile-card__items__top'></Box>
                <hr />
                <Box>
                    <Box className='profile-card__items__bottom'>
                        <Box className='profile-card__items__bottom__img'>

                            <label htmlFor="profile__photo__input" className="profile-card__items__bottom__img__label">
                                <input
                                    accept="image/*"
                                    id="profile__photo__input"
                                    type="file"
                                    className="profile-card__items__bottom__img__label__input"
                                />
                                <Typography className="profile-card__items__bottom__img__label__icon">
                                    <Avatar className="icon" src={ICONS['UPLOAD']} />
                                </Typography>
                            </label>
                        </Box>
                        <Box className='profile-card__items__bottom__btn'>
                            <Button className='profile-card__items__bottom__btn__editbtn'
                                startIcon={<EditIcon />}
                                onClick={openDialog}
                            >
                                Edit Profile
                            </Button>
                        </Box>
                    </Box>
                    <Box className="children">
                        <EditSeekerProfile />
                    </Box>
                </Box>
            </Box>
            {isDialogOpen && (
                <ProfileNavbar
                    open={isDialogOpen}
                    onClose={closeDialog}
                // addServiceCard={addServiceCard}
                />
            )}
        </Card>
    )
}
EditProfile.PropTypes = {
    // onClick: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired,
}
export default EditProfile
