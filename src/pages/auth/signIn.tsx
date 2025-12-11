import Layout from "@/components/BackOfficeLayout"
import { Box, Button } from "@mui/material"
import { signIn } from "next-auth/react"

const SignIn = () => {
    return (
        <Layout>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
                <Button sx={{
                    bgcolor: "#3F72AF"
                }} variant="contained" onClick={() => signIn('google', {
                    callbackUrl: "/back-office"
                })}>
                    Sign In with Google
                </Button>
            </Box>
        </Layout>
    )
}

export default SignIn;