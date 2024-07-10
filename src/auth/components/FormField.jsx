import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const FormField = ({
  label,
  type,
  showPassword,
  onShowPassword,
  onChange,
  name,
  value,
  icon,
  ...props
}) => {
  return (
    <TextField
      label={label}
      variant='outlined'
      type={type === 'password' && showPassword ? 'text' : type}
      name={name}
      value={value}
      fullWidth
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            {React.cloneElement(icon, { sx: { fontSize: 20 } })}
          </InputAdornment>
        ),
        endAdornment: type === 'password' && (
          <InputAdornment position='end'>
            <IconButton onClick={onShowPassword}>
              {showPassword ? (
                <Visibility sx={{ fontSize: 20 }} />
              ) : (
                <VisibilityOff sx={{ fontSize: 20 }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
        sx: { fontSize: 12 }
      }}
      {...props}
    />
  )
}

export default FormField
