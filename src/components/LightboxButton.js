/* eslint-disable react/prop-types */
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function LightboxButton({ onClick }) {
  return (
    <Box sx={{ mb: 2 }}>
      <Button variant="contained" onClick={onClick}>
        Open Lightbox
      </Button>
    </Box>
  )
}

export default LightboxButton
