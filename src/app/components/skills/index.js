import React from 'react'
import { Box, Typography } from '@mui/material'
import './index.scss'

const SkillsSeeker = () => {
    let skills = [' User Research', 'Wireframing', 'Prototyping ']
    let backgroundColors = ['#FFF3ED', '#B8DBFF', '#F2F2F2'] // Define an array of background colors

    return (
        <Box className='seeker-skills'>
            {
                skills.map((skill, index) => {
                    return (
                        <Box key={index} className='seeker-skills__items'>
                            <Typography className='seeker-skills__items__skill'
                                style={{
                                    background: backgroundColors[index],
                                    border: `1px solid ${backgroundColors[index]}`
                                }}                            >
                                {skill}
                            </Typography>
                        </Box>
                    )
                })
            }

        </Box>
    )

}
export default SkillsSeeker