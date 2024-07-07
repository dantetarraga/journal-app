import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const AuthLayout = ({ children, title = '', subtitle = '' }) => {
  return (
    <Box
      component='section'
      sx={{
        display: 'grid',
        placeItems: 'center',
        padding: 4,
        height: '100vh',
        backgroundImage: 'url(/bg-auth.avif)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Paper
        component='div'
        elevation={3}
        sx={{
          width: { sm: 450, md: 600, lg: 700 },
          padding: 4,
          borderRadius: 4,
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Typography
          variant='h1'
          color='primary.main'
          fontWeight={800}
          fontSize={25}
        >
          {title}
        </Typography>

        <Typography
          variant='body2'
          color='text.secondary'
          fontSize={15}
          marginBottom={2}
        >
          {subtitle}
        </Typography>

        {children}
      </Paper>
    </Box>
  )
}

export default AuthLayout
