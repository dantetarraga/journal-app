import { EmailSharp, LockSharp, PersonSharp } from '@mui/icons-material'
import { Button, Grid, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { useForm, usePasswordVisibility } from '../../hooks'
import FormField from '../components/FormField'
import AuthLayout from '../layout/AuthLayout'

const RegisterPage = () => {
  const { firstName, lastName, email, password, onInputChange, formState } =
    useForm({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout
      title='Welcome to Journal App'
      subtitle='Capture your thoughts, ideas, and experiences in one place.'
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormField
              label='First Name'
              placeholder='Enter your first name'
              icon={<PersonSharp />}
              value={firstName}
              name='firstName'
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormField
              label='Last Name'
              icon={<PersonSharp />}
              placeholder='Enter yout last name'
              value={lastName}
              name='lastName'
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormField
              label='Email'
              icon={<EmailSharp />}
              placeholder='example@gmail.com'
              value={email}
              name='email'
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormField
              label='Password'
              type='password'
              placeholder='Enter your password'
              showPassword={showPassword}
              onShowPassword={togglePasswordVisibility}
              icon={<LockSharp />}
              value={password}
              name='password'
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type='submit'
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
