import { Container, Paper, Typography } from '@mui/material'
import React from 'react'

const AuthLayout = ({ children, title = '', subtitle = '' }) => {
  return (
    <Container
      component='section'
      sx={{
        display: 'grid',
        placeItems: 'center',
        padding: 4,
        height: '100vh'
      }}
    >
      <Paper
        component='div'
        elevation={3}
        sx={{
          width: { sm: 450, md: 600 },
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 4,
          textAlign: 'center'
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
          marginBottom={5}
        >
          {subtitle}
        </Typography>

        {children}
      </Paper>
    </Container>
  )
}

export default AuthLayout
