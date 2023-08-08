import React from 'react'
import EditProfile from '../../components/editProfile'
import ProfileDetails from '../../components/profileDetails'
import LinearProgressbar from '../../common/progressBar'
import ProfileWrapper from '../../containers/profileWraper'
import { Grid } from '@mui/material'

const Profile = () => {
    return (
        <>
            <ProfileWrapper>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item sx={{ mb: '24px' }} sm={12} md={10}>
                        <EditProfile />
                    </Grid>
                    <Grid item md={7} sm={7}>
                        <ProfileDetails />
                    </Grid>

                    <Grid item md={3} sm={3}>
                        <LinearProgressbar />
                    </Grid>
                </Grid>
            </ProfileWrapper>
        </>
    )
}
export default Profile
