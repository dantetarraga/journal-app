import { EmailSharp, LockSharp, PersonSharp } from '@mui/icons-material'
import { Button, Grid, Link, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { useForm, usePasswordVisibility } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import FormField from '../components/FormField'
import AuthLayout from '../layout/AuthLayout'

const formValidations = {
  firstName: [(value) => !!value, 'First name is required'],
  lastName: [(value) => !!value, 'Last name is required'],
  email: [(value) => value.includes('@'), 'Invalid email address'],
  password: [
    (value) => value.length >= 6,
    'Password must be at least 6 characters'
  ]
}

const formData = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility()
  const {
    firstName,
    lastName,
    email,
    password,
    onInputChange,
    isValidForm,
    firstNameValid,
    lastNameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidations)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (!isValidForm) return

    dispatch(
      startCreatingUserWithEmailPassword({
        email,
        password,
        firstName,
        lastName
      })
    )
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
              error={!!firstNameValid && formSubmitted}
              helperText={
                !!firstNameValid && formSubmitted ? firstNameValid : ''
              }
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
              error={!!lastNameValid && formSubmitted}
              helperText={!!lastNameValid && formSubmitted ? lastNameValid : ''}
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
              error={!!emailValid && formSubmitted}
              helperText={!!emailValid && formSubmitted ? emailValid : ''}
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
              error={!!passwordValid && formSubmitted}
              helperText={!!passwordValid && formSubmitted ? passwordValid : ''}
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
