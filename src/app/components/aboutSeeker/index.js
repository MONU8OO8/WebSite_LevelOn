import React from 'react'
import Box from '@mui/material/Box'
import TextInput from '../textinput'
import { Grid, TextField } from '@mui/material'
import MultiSelect from '../mutiSelect'
import SingleSelect from '../sigleSelect'
import './index.scss'

const AboutSeeker = () => {
    const languages = [
        { label: 'Tamil' },
        { label: 'Hindi' },
        { label: 'English' },
        { label: 'Marathi' },

    ]

    const gender = [
        { label: 'Male' },
        { label: 'Female' },
        { label: 'Other' }
    ]

    return (
        <Grid className="aboutSeeker" container>
            <Box sx={{ mb: '40px' }} />
            <Grid item className="aboutSeeker__container">
                <Grid item xs={12} sm={6} md={6}>
                    <TextInput label={'Your full name *'} name="name" placeholder={'Eg: Full name '} type={'text'} className='text' />
                </Grid>
                < Grid item xs={12} sm={6} md={6}>
                    <SingleSelect
                        className='text'
                        label={'Select gender'}
                        name={'month'}
                        type={'text'}
                        options={gender}
                        renderInput={(params) => <TextField {...params}
                            placeholder='Enter your gender'

                        />}
                        handleChange={((e) => e.target.value)}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid className="aboutSeeker__container">
                < Grid item xs={12} sm={6} md={6}>

                    <TextInput label={'City *'} name="name" placeholder={'Eg: Mumbai '} type={'text'} className='text' />
                </Grid>
                < Grid item xs={12} sm={6} md={6}>

                    <TextInput label={'Country *'} name="name" placeholder={'Eg: India '} type={'text'} className='text' />
                </Grid>
            </Grid>
            <Grid className="aboutSeeker__container">


                < Grid item xs={12} sm={6} md={6}>

                    <MultiSelect
                        className='text'
                        label={'Languages do you speak *'}
                        name={'expertise'}
                        type={'text'}
                        options={languages}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                placeholder=' Eg: Hindi English'
                                InputLabelProps={{ className: 'inputlabel-items' }}

                            />}
                        handleChange={((e) => e.target.value)}
                        fullWidth
                    />
                </Grid>
                < Grid item xs={12} sm={6} md={6}>


                    <TextInput label={'LinkedIn Link *'} name="name" placeholder={'Eg: Full name '} type={'text'} className='text' />
                </Grid>

            </Grid>


            <Box sx={{ mb: '20px' }} />
            <TextInput
                className='text'
                label={'Bio? * '}
                name="name" placeholder={'Write something about yourself'}
                type={'text'} multiline
                rows={4} />

            <Box sx={{ mb: '80px' }} />

        </Grid>

    )
}

export default AboutSeeker