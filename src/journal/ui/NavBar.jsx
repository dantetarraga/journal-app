import { MenuOutlined } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar } from '@mui/material'

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton>
          <MenuOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
