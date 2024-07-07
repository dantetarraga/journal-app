import { EmailSharp, LockSharp, PersonSharp } from '@mui/icons-material'
import { Button, Grid, Link, Typography } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import FormField from '../components/FormField'
import AuthLayout from '../layout/AuthLayout'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <AuthLayout
      title='Welcome to Journal App'
      subtitle='Capture your thoughts, ideas, and experiences in one place.'
    >
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormField
              label='First Name'
              placeholder='Enter your first name'
              icon={<PersonSharp />}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              label='Last Name'
              icon={<PersonSharp />}
              placeholder='Enter yout last name'
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormField
              label='Email'
              icon={<EmailSharp />}
              placeholder='example@gmail.com'
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormField
              label='Password'
              type='password'
              placeholder='Enter your password'
              showPassword={showPassword}
              handleShowPassword={handleShowPassword}
              icon={<LockSharp />}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant='contained'
              fullWidth
              sx={{ bgcolor: 'primary.button' }}
            >
              <Typography variant='button'>create account</Typography>
            </Button>
          </Grid>

          <Grid container justifyContent='end' sx={{ mt: 1 }}>
            <Link
              component={RouterLink}
              to='/auth/login'
              sx={{
                color: '#1976d2',
                '&:hover': {
                  color: '#115293'
                }
              }}
            >
              <Typography variant='body2'>
                Do you already have an account? Log in
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
