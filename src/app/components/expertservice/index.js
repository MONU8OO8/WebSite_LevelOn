import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '../button/index'
import DialogPopup from '../popup/index'
import './index.scss'
import ServiceCard from '../servicecards/index'
import { Typography } from '@mui/material'

const ServiceComponent = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [cardData, setCardData] = useState([])

  useEffect(() => {
    const storedCardData = JSON.parse(localStorage.getItem('serviceCardData') || '[]')
    setCardData(storedCardData)
  }, [])

  const openDialog = () => {
    setDialogOpen(true)
  }

  const closeDialog = () => {
    setDialogOpen(false)
  }

  const addServiceCard = (title, description, price, min) => {
    const newCard = {
      heading: title,
      description: description,
      price: price,
      min: min
    }
    const updatedCardData = [...cardData, newCard]
    setCardData(updatedCardData)
    localStorage.setItem('serviceCardData', JSON.stringify(updatedCardData))
  }

  const deleteServiceCard = (index) => {
    const updatedCardData = cardData.filter((_, i) => i !== index)
    setCardData(updatedCardData)
    localStorage.setItem('serviceCardData', JSON.stringify(updatedCardData))
  }

  return (
    <Grid className="service">
      <Box className="service__section">
        <Box className="service__section__button">
          <Typography>Select Services</Typography>
          <Grid className="service__section__button__add">
            <Button
              label="Add New Services"
              className="addbutton"
              eventHandler={openDialog}
            />
          </Grid>
        </Box>
        <hr className="service__section__line" />
        <Grid className="service__content">
          {cardData.map((card, index) => (
            <Grid key={index}>
              <ServiceCard
                heading={card.heading}
                description={card.description}
                price={card.price}
                min={card.min}
                onDelete={() => deleteServiceCard(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {isDialogOpen && (
        <DialogPopup
          open={isDialogOpen}
          onClose={closeDialog}
          addServiceCard={addServiceCard}
        />
      )}
    </Grid>
  )
}

export default ServiceComponent
