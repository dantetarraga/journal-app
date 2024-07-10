import { EmailSharp, Google, LockSharp } from '@mui/icons-material'
import { Alert, Button, Grid, Link, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { useForm, usePasswordVisibility } from '../../hooks'
import {
  startGoogleSignIn,
  startLoginWithEmailPassword
} from '../../store/auth'
import FormField from '../components/FormField'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector((state) => state.auth)
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility()
  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])
  const handleGoogleLogin = () => dispatch(startGoogleSignIn())
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(startLoginWithEmailPassword({ email, password }))
    console.log(errorMessage)
  }

  return (
    <AuthLayout
      title='Welcome Back!'
      subtitle='Sign in to your account to access your journal.'
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} className='box-shadow'>
            <FormField
              label='Email'
              icon={<EmailSharp />}
              placeholder='Example@gmail.com'
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormField
              label='Password'
              type='password'
              showPassword={showPassword}
              placeholder='Enter your password'
              icon={<LockSharp />}
              onShowPassword={togglePasswordVisibility}
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Alert
              severity='error'
              sx={{ display: errorMessage ? '' : 'none' }}
            >
              Incorrect user or password
            </Alert>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  type='submit'
                  variant='contained'
                  fullWidth
                  sx={{ bgcolor: 'primary.button' }}
                >
                  <Typography variant='button'>Login</Typography>
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  variant='contained'
                  fullWidth
                  sx={{ bgcolor: 'primary.button' }}
                  startIcon={<Google />}
                  onClick={handleGoogleLogin}
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
