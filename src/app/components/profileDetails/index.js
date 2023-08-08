import React from 'react'
import { Box } from '@mui/system'
import SkillsSeeker from '../skills'
import SeekerExperience from '../seekerExperience'
import SeekerEducation from '../seekerEducation'
// import ProfileHeading from '../.././components/ProfileHeading'
// import { SeekerProfileConstants } from '../../mock-data/constants'

const ProfileDetails = () => {
    // const seekerData = [
    //     {
    //         heading: SeekerProfileConstants['aboutTitle'],
    //         children: <AboutSeeker />,
    //     },
    //     {
    //         heading: SeekerProfileConstants['skillTitle'],
    //         children: <SkillsSeeker />,
    //     },
    //     {
    //         heading: SeekerProfileConstants['exptitle'],
    //         children: <SeekerExperience />,
    //     },
    //     {
    //         heading: SeekerProfileConstants['eduTitle'],
    //         children: <SeekerEducation />,
    //     },
    // ]
    return (
        <>
            <Box container justifyContent="center" spacing={2}>
                <Box item md={7} sm={7}>
                    {/* <AboutSeeker /> */}
                    <SkillsSeeker />
                    <SeekerExperience />
                    <SeekerEducation />
                    {/* {seekerData.map((cards, index) => {
                        return (
                            <Box key={index} sx={{ mb: '24px' }}>
                                <ProfileHeading
                                    heading={cards.heading}
                                    children={cards.children}
                                />
                            </Box>
                        )
                    })} */}
                </Box>
            </Box>
        </>
    )
}
export default ProfileDetails
