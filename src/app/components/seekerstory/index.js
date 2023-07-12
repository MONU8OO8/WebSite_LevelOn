import React from 'react'
import Box from '@mui/material/Box'
import TextInput from '../textinput'
import { TextField } from '@mui/material'
import MultiSelect from '../mutiSelect'
import './index.scss'

const SkeekerStory = () => {
    const Expertise = [
        { label: 'Resume Review' },
        { label: 'Career Guidance' },
        { label: 'Mock Interview' },
        { label: 'Mentor Ship' },
        { label: 'Project Review' },
        { label: 'Let`s Connect' }

    ]
    
    return (
        <Box className="seeker__skill">
            <Box sx={{ mb: '40px' }} />

            <MultiSelect
                label={'What’s your expertise?'}
                name={'expertise'}
                type={'text'}
                options={Expertise}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        placeholder='Select Services'
                        InputLabelProps={{ className: 'inputlabel-items' }}

                    />}
                handleChange={((e) => e.target.value)}
                fullWidth
            />

            <Box sx={{ mb: '20px' }} />

            <TextInput label={'What’s your story?'} name="name" placeholder={'Tell us more about yourself and your goals and interest'} type={'text'} multiline
                rows={4} />

            <Box sx={{ mb: '80px' }} />

        </Box>


    )
}

export default SkeekerStory