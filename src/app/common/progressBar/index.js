import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material'
import './index.scss'

export default function LinearProgressbar() {
    const [progress, setProgress] = useState(0)
    const [completed, setCompleted] = useState(false) // New state variable

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    setCompleted(true) // Update the completed state to true when progress is 100%
                    return 0
                }
                const diff = 10
                return Math.min(oldProgress + diff, 100)
            })
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <Card className='progressbar-card' variant='outlined'>

            <Box sx={{ width: '100%' }} className='progressbar-card__layout'>
                <Typography className='progressbar-card__layout__header'>Complete profile</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }} className='progressbar-card__layout__items'>
                    <Box sx={{ width: '100%', mr: 1 }} className='progressbar-card__layout__items__progressmeter'>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            className={`progressbar-card__layout__items__progressmeter__progress ${completed ? 'completed' : ''}`} // Apply 'completed' class when progress is 100%
                        />
                    </Box>
                    <Box sx={{ minWidth: 35 }} className='progressbar-card__layout__items__lebel'>
                        <Typography variant="body2" className='progressbar-card__layout__items__lebel__percentage'>
                            {`${Math.round(progress)}%`}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}
