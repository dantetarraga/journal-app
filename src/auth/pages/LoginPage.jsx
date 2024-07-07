import { EmailSharp, Google, Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
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
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              InputProps={{
                startAdornment: <EmailSharp />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              label='Password'
              variant='outlined'
              type={!showPassword ? 'text' : 'password'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                )
              }}
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
