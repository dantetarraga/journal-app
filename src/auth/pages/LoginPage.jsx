import { Button, Container, Grid, TextField, Typography } from '@mui/material'

const LoginPage = () => {
  return (
    <Container
      component='section'
      sx={{
        height: ' 100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Typography
        variant='h1'
        color='primary.main'
        fontWeight={800}
        fontSize={25}
        marginBottom={5}
      >
        Welcome Back!
      </Typography>

      <form>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={12}>
            <TextField label='Email' variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField label='Password' variant='outlined' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth sx={{ bgcolor: 'primary.button' }}>
                  <Typography variant='button'>Login</Typography>
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth sx={{ bgcolor: 'primary.button' }}>
                  <Typography>Google</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </Container>
  )
}

export default LoginPage
