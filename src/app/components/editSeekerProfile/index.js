import React from 'react'
import { Box, Typography } from '@mui/material'
import './index.scss'
import { Link } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'

const EditSeekerProfile = () => {
    let seekerDetails = [
        {
            name: 'Ashwini Desai',
            role: 'Software Developer',
            address: 'Bengloore , Karnataka',
            portfolio: 'Ashwini - Linkedin',
            linkedin: 'https://www.linkedin.com/in/ashwini-profile',
            contactinfo: 'https://www.linkedin.com/in/ashwini-contact'

        }
    ]

    const [imageLoaded, setImageLoaded] = React.useState(true)

    const handleImageError = () => {
        setImageLoaded(false)
    }
    return (
        <Box className='seeker-info'>
            <Box className='seeker-info__details'>
                {
                    seekerDetails.map((details, index) => {
                        return (
                            <Typography key={index}>
                                <Typography className='seeker-info__details__name'> {details.name} </Typography>
                                <Typography className='seeker-info__details__role'> {details.role} </Typography>
                                <Typography className='seeker-info__details__address'>
                                    {details.address}
                                    <Link to={details.contactinfo} className='seeker-info__details__address__contactinfo'>Contact info</Link>
                                </Typography>
                                <Typography>
                                    <Link to={details.linkedin} className='seeker-info__details__portfolio' style={{ display: 'flex', alignItems: 'center' }}>
                                        {details.portfolio}
                                        <LaunchIcon className='link-icon' />
                                    </Link>
                                </Typography>

                            </Typography>
                        )
                    })
                }


            </Box>
            <Box className='seeker-info__exp'>
                <Box className='seeker-info__exp__data'>
                    <Box className='seeker-info__exp__data__img'>
                        {imageLoaded ? (
                            <img
                                src=''
                                className='logo'
                                alt="logo"
                                onError={handleImageError}
                            />
                        ) : (
                            <ImageOutlinedIcon />
                        )}
                    </Box>
                    <Typography className='seeker-info__exp__data__text'>Levelon</Typography>
                </Box>
                <Box className='seeker-info__exp__data'>
                    <Box className='seeker-info__exp__data__img'>

                        {imageLoaded ? (
                            <img
                                src=''
                                className='logo'
                                alt="logo"
                                onError={handleImageError}
                            />
                        ) : (
                            <ImageOutlinedIcon />
                        )}
                    </Box>
                    <Typography className='seeker-info__exp__data__text'>University of Madras</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default EditSeekerProfile