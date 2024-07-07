import { Box, Toolbar } from '@mui/material'
import NavBar from '../ui/NavBar'
import SideBar from '../ui/SideBar'

const drawerWidth = 240

const JournalLayout = ({ children }) => {
  return (
    <Box>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  )
}

export default JournalLayout
