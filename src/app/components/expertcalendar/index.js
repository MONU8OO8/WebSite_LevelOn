// import React, { useState } from 'react'
import React from 'react'
import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import TextInput from '../textinput'
import { TextField } from '@mui/material'
import './index.scss'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import SingleSelect from '../sigleSelect'

const ExpertCalendar = () => {

    const months = Array.from({ length: 12 }, (_, index) => ({
        label: `${index} months`,
    }))

    return (
        <Box className="calendar">
            <Box className="calendar__slot">
                <FormControlLabel control={<Checkbox />} label="Required" />
                <Grid item xs={12} sm={6} md={4}>
                    <SingleSelect
                        // label={'Months of experience'}
                        name={'month'}
                        type={'text'}
                        options={months}
                        renderInput={(params) => <TextField {...params}
                            placeholder='Months'

                        />}
                        handleChange={((e) => e.target.value)}
                        fullWidth
                    />
                </Grid>
                <hr/>
                <Grid item xs={12} sm={6} md={4}>
                    <SingleSelect
                        // label={'Months of experience'}
                        name={'month'}
                        type={'text'}
                        options={months}
                        renderInput={(params) => <TextField {...params}
                            placeholder='Months'

                        />}
                        handleChange={((e) => e.target.value)}
                        fullWidth
                    />
                </Grid>
            </Box>
            <Box>
                <FormControlLabel control={<Checkbox />} label="Required" />
            </Box>

        </Box>

    )
}

export default ExpertCalendar