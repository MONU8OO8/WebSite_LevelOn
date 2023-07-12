import React from 'react'
import Box from '@mui/material/Box'
import TextInput from '../textinput'
import { TextField } from '@mui/material'
import MultiSelect from '../mutiSelect'
import './index.scss'

const SkeekerSkill = () => {
    const Expertise = [
        { label: 'Management' },
        { label: 'Marketing' },
        { label: 'Design' },
        { label: 'Custom Service' },
        { label: 'Project Management' },
        { label: 'Data Analyst' }

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
                        placeholder='Select Expertise'
                        InputLabelProps={{ className: 'inputlabel-items' }}

                    />}
                handleChange={((e) => e.target.value)}
                fullWidth
            />
            <Box sx={{ mb: '20px' }} />
            <TextInput label={'Company/school'} name="name" placeholder={'Eg. Google, University, etc'} type={'text'} />

            <Box sx={{ mb: '20px' }} />

            <TextInput label={'Job role / Your title'} name="name" placeholder={'Eg. Product Designer, Student'} type={'text'} />

        </Box>

    )
}

export default SkeekerSkill