import { EmailSharp, Google, LockSharp } from '@mui/icons-material'
import { Button, Grid, Link, Typography } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import FormField from '../components/FormField'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <AuthLayout
      title='Welcome Back!'
      subtitle='Sign in to your account to access your journal.'
    >
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} className='box-shadow'>
            <FormField
              label='Email'
              icon={<EmailSharp />}
              placeholder='Example@gmail.com'
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormField
              label='Password'
              type='password'
              showPassword={showPassword}
              handleShowPassword={handleShowPassword}
              icon={<LockSharp />}
              placeholder='Enter your password'
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant='contained'
                  fullWidth
                  sx={{ bgcolor: 'primary.button' }}
                >
                  <Typography variant='button'>Login</Typography>
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  variant='contained'
                  fullWidth
                  sx={{ bgcolor: 'primary.button' }}
                  startIcon={<Google />}
                >
                  <Typography>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent='end' sx={{ mt: 1 }}>
            <Link
              component={RouterLink}
              to='/auth/register'
              sx={{
                color: '#1976d2',
                '&:hover': {
                  color: '#115293'
                }
              }}
            >
              <Typography variant='body2'>
                Don't have an account? Register
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default LoginPage
