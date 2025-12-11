import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
// import MenuIcon from '@mui/icons-material/Menu';

const TopBar = () => {
  const {data} = useSession();

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#3F72AF", height: "8%" }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Foodie POS
          </Typography>
          {data && <Button color="inherit" onClick={() => signOut()}>Sign Out</Button>}
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default TopBar