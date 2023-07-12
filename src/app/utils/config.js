import useMediaQuery from '@mui/material/useMediaQuery'
import { EmailValidation, PasswordValidation } from './services'

export function GetCurrentResolution() {
    const isMobile = useMediaQuery('(max-width: 600px)')

    const isTablet = useMediaQuery('(max-width:900px)')

    const isLaptop = useMediaQuery('(max-width:1200px)')

    const isDesktop = useMediaQuery('(max-width:1536px)')

    if (isMobile) {
        return 'mobile'
    } else if (isTablet) {
        return 'tablet'
    } else if (isLaptop) {
        return 'laptop'
    } else if (isDesktop) {
        return 'desktop'
    }
}

export const validateForm = (formData) => {
    const errors = {}

    if (!formData.email) {
        errors.email = 'Email is required'
    } else if (!EmailValidation(formData.email)) {
        errors.email = 'Invalid email format'
    }

    if (!formData.password) {
        errors.password = 'Password is required'
    } else if (!PasswordValidation(formData.password)) {
        errors.password = 'Invalid Password format'
    }

    if (!formData.confirmPassword) {
        errors.confirmPassword = 'Please enter Confirm Password.'
    } 
    else if( (formData.password !== formData.confirmPassword) ) {
        errors.confirmPassword = 'Password and Confirm Password does not match'
    } 


    if(!formData.otp){
        errors.otp = ' OTP field should not be empty '
    }

    return errors
}



