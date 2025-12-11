import { Box, Typography } from '@mui/material'
import React, { ReactNode } from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import { useSession } from 'next-auth/react'
// import AppSnackBar from './AppSnackBar'

interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props) => {

// 1. Browser URL Enter --> http request (Get)
// 2. http request --> server --> route? --> /back-office
// 3. pages/back-office --> index.tsx --> initial HTML
// 4. Server --> initial  HTML --> browser --> http Response + HTML
// 5. Browser HTTP Document Display (UI)
// 6. React (Hydration) --> HTML UI <-- React Controls  // This is where useEffect renders first & localStorage takes place as it becomes Client Side.

//   const accessToken = localStorage.getItem("accessToken"); // Cannot Run on Server Side

    // With useEffect, you can use localStorage feature to get accessToken as it is on Client Side
    // useEffect(()=>{ 
    //     const accessToken = localStorage.getItem("accessToken");
    // },[])

    const {data} = useSession();
    
  return (
    <Box sx={{height: "100vh" }}>
      <TopBar />
      <Box sx={{ display: "flex", height: "92%" }}>
        {data && <SideBar />}
        <Box sx={{ flexGrow: 1, p: 2, bgcolor: "#F9F7F7" }}>
          {children}
        </Box>
      </Box>
      {/* <AppSnackBar/> */}
    </Box>
  )
}

export default Layout