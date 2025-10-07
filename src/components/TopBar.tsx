import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import { useRouter } from 'next/router';
// import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#3F72AF" }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Foodie POS
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default TopBar