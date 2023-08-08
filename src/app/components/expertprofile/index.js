import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextInput from '../textinput/index'
import InputAdornment from '@mui/material/InputAdornment'
import { ICONS } from '../../constants/icons'
import { Avatar } from '@mui/material'
import './index.scss'
import SingleSelect from '../sigleSelect'
import { TextField } from '@mui/material'

const ExpertProfile = () => {
    const gender = [
        { label: 'Male' },
        { label: 'Female' }
    ]
    return (
        <Box item xs={12} sm={6} md={6} className="expert__profile">
            <Typography variant="h6" className="expert__profile__title">
                Upload a profile photo
            </Typography>
            <Box sx={{ mb: '8px' }} />
            <Box className="expert__profile__upload">
                <label htmlFor="profile__photo__input" className="expert__profile__upload__label">
                    <input
                        accept="image/*"
                        id="profile__photo__input"
                        type="file"
                        className="expert__profile__upload__input"
                    />
                    <Typography className="expert__profile__upload__icon">
                        <Avatar className="icon" src={ICONS['UPLOAD']} />
                    </Typography>
                </label>

                <Typography className="expert__profile__text">
                    <Typography variant="body2" className="expert__profile__text__row1">
                        Select a file
                    </Typography>
                    <Typography variant="body2" className="expert__profile__text__row2">
                        Make sure the file is below 2MB
                    </Typography>
                </Typography>
            </Box>
            <Box sx={{ mb: '20px' }} />

            <Box className='expert__profile__section'>
                <TextInput label={'User Name'} name="name" placeholder={'First and last name'} type={'text'} />
                <Box sx={{ mb: '20px' }} />

                <TextInput
                    label={'Phone Number'}
                    name="phoneNumber"
                    placeholder={'Enter your Phone Number'}
                    type={'text'}
                    startAdornment={<InputAdornment position="start">+1</InputAdornment>}
                />
                <Box sx={{ mb: '20px' }} />
                <SingleSelect
                    label={'What gender do you identify as?'}
                    name={'gender'}
                    type={'text'}
                    options={gender}
                    renderInput={(params) => <TextField {...params}
                        placeholder='Enter your gender'

                    />}
                    handleChange={((e) => e.target.value)}
                    fullWidth
                />

            </Box>

        </Box>

    )
}

export default ExpertProfile      