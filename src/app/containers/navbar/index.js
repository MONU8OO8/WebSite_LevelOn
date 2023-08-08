import React from 'react'
import { alpha, styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { LevelonLogo } from '../../utils/utilities.js'
import HomeIcon from '@mui/icons-material/Home'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import './index.scss'
import { Typography } from '@mui/material'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        // padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

export default function SearchAppBar() {

    return (
        <Box sx={{ flexGrow: 0 }} className='navbar'>
            <AppBar className='navbar__container'>
                <Toolbar className='navbar__container__items'>
                    <IconButton
                        className='navbar__container__items__logo'
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <LevelonLogo />
                    </IconButton>
                    <Search className='search'>
                        <SearchIconWrapper>
                            <SearchIcon className='search-icon' />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search mentors"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 0.5 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{ display: { xs: 'block', md: 'block' } }} className='allicon'>
                            <IconButton className='icons'>
                                <Badge badgeContent={''} >
                                    <HomeIcon />

                                </Badge>
                                <Typography variant="caption">Home</Typography>

                            </IconButton>
                        </Box>

                        <IconButton >
                            <Badge badgeContent={''} >
                                <MessageOutlinedIcon />
                            </Badge>
                            <Typography variant='caption'>Messages</Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={''} >
                                <NotificationsNoneOutlinedIcon />

                            </Badge>
                            <Typography variant="caption">Notificatons</Typography>

                        </IconButton>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={'menuId'}
                            aria-haspopup="true"
                            onClick=''
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
