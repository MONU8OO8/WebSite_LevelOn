import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './index.scss';
import { Typography } from '@mui/material';
import Calendar from 'moedim';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SingleSelect from '../sigleSelect';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

const ExpertCalendar = () => {
    const [value, setValue] = useState(new Date());

    // Generate time options from 9:00 AM to 12:30 AM
    const generateTimeOptions = () => {
        const times = [];
        for (let hours = 1; hours <= 12; hours++) {
            for (let minutes = 0; minutes <= 30; minutes += 30) {
                const meridiem = hours >= 12 ? 'PM' : 'AM';
                times.push({
                    label: `${hours}:${minutes === 0 ? '00' : minutes} ${meridiem}`,
                });
            }
        }
        return times;
    };

    const Times = generateTimeOptions();

    const gender = [
        { label: 'Weekly on Wednesday' },
        { label: 'Every Weekdays (Mon & Fri)' },
        { label: 'Never' },
        { label: 'FemCustom..ale' },
    ];

    return (
        <Box className="calendar">
            <Typography className="calendar__title">Set Your Availability</Typography>
            <Typography className="calendar__content">
                <Typography className="calendar__content__calendar">
                    <Typography className="calendar__content__calendar__head">Set Your Availability</Typography>
                    <Box sx={{ mb: '20px' }} />
                    <Calendar value={value} onChange={(d) => setValue(d)} />
                </Typography>
                <hr className="vertical-line" />
                <Typography className="calendar__content__schedule">
                    <Typography className="calendar__content__schedule__head">Set Your Availability</Typography>
                    <Box sx={{ mb: '20px' }} />
                    <Typography className="calendar__content__schedule__left">
                        <Grid className="calendar__content__schedule__left__time">
                            <Grid item xs={12} sm={6} md={5}>
                                <SingleSelect
                                    name={'Time'}
                                    type={'text'}
                                    options={Times}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="Time"
                                        />
                                    )}
                                    handleChange={(e) => e.target.value}
                                    fullWidth
                                />
                            </Grid>
                            <Box className="calendar__content__schedule__left__time__line">to</Box>
                            <Grid item xs={12} sm={6} md={5}>
                                <SingleSelect
                                    name={'Time'}
                                    type={'text'}
                                    options={Times}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="Time"
                                        />
                                    )}
                                    handleChange={(e) => e.target.value}
                                    fullWidth
                                />
                            </Grid>
                            <ClearIcon className="clear" />
                            <AddIcon className="add" />
                        </Grid>
                        <Box sx={{ mb: '10px' }} />
                        <Typography>Set Your Availability</Typography>
                        <Box sx={{ mb: '10px' }} />
                        <FormControlLabel required control={<Checkbox />} label="All Days" />
                        <SingleSelect
                            name={'gender'}
                            type={'text'}
                            options={gender}
                            renderInput={(params) => <TextField {...params} placeholder="Daily" />}
                            handleChange={((e) => e.target.value)}
                            fullWidth
                        />
                    </Typography>
                </Typography>
            </Typography>
        </Box>
    );
};

export default ExpertCalendar;
