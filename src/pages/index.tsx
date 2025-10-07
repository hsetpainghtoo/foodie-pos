import { Geist, Geist_Mono } from "next/font/google";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Box>
      <Typography variant="h1">Landing Page</Typography>

      <Box sx={{display: "flex", flexDirection: "column"}}>
        <Link href="/back-office">
          <Typography variant="h3">Back Office</Typography>
        </Link>
        <Link href="/order">
          <Typography variant="h3">Order</Typography>
        </Link>
      </Box>
    </Box>
  );
}
