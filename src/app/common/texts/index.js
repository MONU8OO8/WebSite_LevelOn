import './index.scss'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'

export const ImgTitle = (title, description) => {
    return (
        <>
            <Typography className='imgtitle'> {title} </Typography>
            <Typography className='img-description'>{description}</Typography>

        </>
    )
}

export const TitleDescription = (title, description) => {
    return (
        <>
            <Typography className='title'>{title}</Typography>
            <Typography className='description'>{description}</Typography>
        </>
    )
}

export const OnboardingTitelDes = (title, desc) => {
    return (
        <>
            <Typography className='onboardtitle'>{title}</Typography>
            <Typography className='onboarddesc'>{desc}</Typography>
        </>
    )
}

export const ForgotPass = (title) => {
    return (
        <>
            <Box sx={{ mb: '16px' }} />
            <Typography className='forgotpwd'>
                <Link to='/forgotpassword' className='link'>{title}</Link>
            </Typography>
            <Box sx={{ mb: '24px' }} />
        </>
    )

}

export const HaveAccount = (description, link) => {
    return (
        <>
            <Typography className='account'>

                {description}<span className='link'>
                    <Link to='/login' className='link'>{link}</Link></span>
            </Typography>
        </>
    )
}
export const signupAccount = (description, link) => {
    return (
        <>
            <Typography className='account'>

                {description}<span className='link'>
                    <Link to='/signup' className='link'>{link}</Link></span>
            </Typography>
        </>
    )
}

export const TermsConditions = (description, link) => {
    return (
        <>
            <Typography className='conditions'>{description}<span className='link'> {link}</span></Typography>
        </>
    )
}

export const GenderDropdown = (label) => {
    return (
        <>
            <Typography className='description'>{label}</Typography>
        </>
    )
}


// export const toastsuccess = (success)=>{
//     return (
//         <>
//             <Typography className='toast'>{success}</Typography>
//         </>
//     )
// }