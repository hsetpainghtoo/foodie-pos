import BackOfficeLayout from "@/components/BackOfficeLayout"
import { Button, Typography } from "@mui/material"
import { signIn, signOut, useSession } from "next-auth/react"


const BackOfficeApp = () => {
  const {data, status} = useSession();
  console.log(data, status);
  return (
    <BackOfficeLayout>
      <Typography>Back Office App {data?.user?.email || " "}</Typography>
      {/* <Button variant="contained" color="primary" onClick={() => data ? signOut() : signIn()}>
        {data ? 'Sign Out' : 'Sign In'}
      </Button> */}
    </BackOfficeLayout>
  )
}

export default BackOfficeApp