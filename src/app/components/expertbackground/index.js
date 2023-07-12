// import React, { useState } from 'react'
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
import TextInput from '../textinput'
import { TextField } from '@mui/material'
import MultiSelect from '../mutiSelect'
import SingleSelect from '../sigleSelect'
import './index.scss'

const ExpertBackground = () => {
    const Expertise = [
        { label: 'Management' },
        { label: 'Marketing' },
        { label: 'Design' },
        { label: 'Custom Service' },
        { label: 'Project Management' },
        { label: 'Data Analyst' }

    ]

    const years = Array.from({ length: 31 }, (_, index) => ({
        label: (index).toString(),
    }))
    const months = Array.from({ length: 12 }, (_, index) => ({
        label: `${index} months`,
    }))

    return (
        <Box className="seeker__skill">
            <Box sx={{ mb: '40px' }} />

            <TextInput label={'Expertise *'} name="name" placeholder={'Eg: UI/UX product manager-'} type={'text'} />
            <Box sx={{ mb: '20px' }} />
            <MultiSelect
                label={'Which disciplines do you have experience in? *'}
                name={'expertise'}
                type={'text'}
                options={Expertise}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        placeholder=' Eg: Managing, designing'
                        InputLabelProps={{ className: 'inputlabel-items' }}

                    />}
                handleChange={((e) => e.target.value)}
                fullWidth
            />

            <Box sx={{ mb: '20px' }} />
            <Grid className="seeker__skill__year">
                <Grid item xs={12} sm={6} md={6}>
                    <SingleSelect
                        label={'Years of experience'}
                        name={'year'}
                        type={'text'}
                        options={years}
                        renderInput={(params) => <TextField {...params}
                            placeholder='Years'

                        />}
                        handleChange={((e) => e.target.value)}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                    <SingleSelect
                        label={'Months of experience'}
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

            </Grid>

            <Box sx={{ mb: '20px' }} />
            <TextInput label={'What would you like to be intro? '} name="name" placeholder={'I am a product designer at Apple who writes about design'} type={'text'} multiline
                rows={4} />

            <Box sx={{ mb: '80px' }} />

        </Box>

    )
}

export default ExpertBackground