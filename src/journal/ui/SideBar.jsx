import { TurnedInNot } from '@mui/icons-material'
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'

const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box component='nav' sx={{ width: drawerWidth, flexShrink: { sm: 0 } }}>
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Jon Doe
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary='Exercitation cillum irure elit consectetur.' />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default SideBar