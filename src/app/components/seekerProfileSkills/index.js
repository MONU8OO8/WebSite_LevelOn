import React from 'react'
import Box from '@mui/material/Box'
import TextInput from '../textinput'
import { TextField } from '@mui/material'
import MultiSelect from '../mutiSelect'
import './index.scss'

const SeekerSkills = () => {
    const skills = [
        { label: 'User Research' },
        { label: 'Wireframing' },
        { label: 'Prototyping' },
    ]

    const sugestedSkills = [
        { label: 'Zeplin' },
        { label: 'Adobe XD' },
        { label: 'Photoshop' },
        { label: 'Invision' },
        { label: 'Mobile Design' }


    ]

    return (
<Box className="seeker__skill">
            <Box sx={{ mb: '40px' }} />

            <TextInput label={'Expertise *'} name="name" placeholder={'Eg: UI/UX product manager-'} type={'text'} />
            <Box sx={{ mb: '20px' }} />
            <MultiSelect
                label={'Skills *'}
                name={'skills'}
                type={'text'}    
                options={skills}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        placeholder=' Eg: Wireframing, Photoshop'
                        InputLabelProps={{ className: 'inputlabel-items' }}

                    />}
                handleChange={((e) => e.target.value)}
                fullWidth
            />

            <Box sx={{ mb: '20px' }} />
                <MultiSelect
                label={'Suggested based on your profile *'}
                name={'sugestedSkills'}
                type={'text'}    
                options={sugestedSkills}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        placeholder=' Eg: Managing, designing'
                        InputLabelProps={{ className: 'inputlabel-items' }}

                    />}
                handleChange={((e) => e.target.value)}
                fullWidth
            />


            <Box sx={{ mb: '80px' }} />

        </Box>

    )
}

export default SeekerSkills