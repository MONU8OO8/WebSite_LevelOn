import Grid from '@mui/material/Grid'
import './index.scss'
import { ICONS } from '../../constants/icons'



export const OrSeprator = () => {

    return (
        <Grid sx={{ mb: '16px' }} alignItems="center" container spacing={2}>
            <Grid item xs={5.5}>
                <hr className='line' />
            </Grid>
            <Grid className='ortext' item xs={1}>
                Or
            </Grid>
            <Grid item xs={5.5}>
                <hr className='line' />
            </Grid>
        </Grid>
    )

}

export const LevelonLogo = () => {
    return (
        <img
            src={ICONS['COMPANYLOGO']}
            className="levelon-logo"
            alt="logo"
        />
    )
}

// export const hasNumber = /\d/  
// export const hasUpperCase = /[A-Z]/
// export const hasLoweCase = /[a-z]/
// export const hasSpecialChar = /^[a-zA-Z0-9]*$/
