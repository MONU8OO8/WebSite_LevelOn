import React, { useState } from 'react'
// import React from 'react'
import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import TextInput from '../textinput'
import { TextField, Typography } from '@mui/material'
import './index.scss'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import SingleSelect from '../sigleSelect'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'

const ExpertCalendar = () => {
    const Times = Array.from({ length: 12 }, (_, index) => ({
        label: `${index} Times`,
    }))

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked)
    }

    return (
        <Box className="calendar">
            <Typography className="calendar__head">
                Update Availability
            </Typography>
            <Box className="calendar__content">
                <Box className="calendar__content__slot">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="Saturday"
                    />
                    <Grid className="calendar__content__slot__time">
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Time"
                                        disabled={!isChecked}
                                    />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <Box className="calendar__content__slot__time__line">
                            to
                        </Box>
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder="Time"
                                        disabled={!isChecked}
                                    />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <ClearIcon className="clear" />
                        <AddIcon className="add" />
                    </Grid>
                </Box>
                <hr className="calendar__content__line" />
                <Box className="calendar__content__slot">
                    <FormControlLabel control={<Checkbox />} label="Sunday" />
                    <Grid className="calendar__content__slot__time">
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <Box className="calendar__content__slot__time__line">
                            to
                        </Box>
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <ClearIcon className="clear" />
                        <AddIcon className="add" />
                    </Grid>
                </Box>
                <hr className="calendar__content__line" />
                <Box className="calendar__content__slot">
                    <FormControlLabel control={<Checkbox />} label="Monday" />
                    <Grid className="calendar__content__slot__time">
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <Box className="calendar__content__slot__time__line">
                            to
                        </Box>
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <ClearIcon className="clear" />
                        <AddIcon className="add" />
                    </Grid>
                </Box>
                <hr className="calendar__content__line" />
                <Box className="calendar__content__slot">
                    <FormControlLabel control={<Checkbox />} label="Tuesday" />
                    <Grid className="calendar__content__slot__time">
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <Box className="calendar__content__slot__time__line">
                            to
                        </Box>
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <ClearIcon className="clear" />
                        <AddIcon className="add" />
                    </Grid>
                </Box>
                <hr className="calendar__content__line" />
                <Box className="calendar__content__slot">
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Wednesday"
                    />
                    <Grid className="calendar__content__slot__time">
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <Box className="calendar__content__slot__time__line">
                            to
                        </Box>
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <ClearIcon className="clear" />
                        <AddIcon className="add" />
                    </Grid>
                </Box>
                <hr className="calendar__content__line" />
                <Box className="calendar__content__slot">
                    <FormControlLabel control={<Checkbox />} label="Thursday" />
                    <Grid className="calendar__content__slot__time">
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <Box className="calendar__content__slot__time__line">
                            to
                        </Box>
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <ClearIcon className="clear" />
                        <AddIcon className="add" />
                    </Grid>
                </Box>
                <hr className="calendar__content__line" />
                <Box className="calendar__content__slot">
                    <FormControlLabel control={<Checkbox />} label="Friday" />
                    <Grid className="calendar__content__slot__time">
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <Box className="calendar__content__slot__time__line">
                            to
                        </Box>
                        <Grid item xs={12} sm={6} md={4}>
                            <SingleSelect
                                // label={'Times of experience'}
                                name={'Time'}
                                type={'text'}
                                options={Times}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="Time" />
                                )}
                                handleChange={(e) => e.target.value}
                                fullWidth
                            />
                        </Grid>
                        <ClearIcon className="clear" />
                        <AddIcon className="add" />
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default ExpertCalendar
