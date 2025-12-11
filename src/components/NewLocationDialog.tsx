import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField, Typography } from "@mui/material"
import { NewMenu } from "../types/menu"
import { useState } from "react"
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { createMenu } from "@/store/slices/menuSlice";
import { showSnackbar } from "@/store/slices/snackbarSlice";


interface Props {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NewLocationDialog = ({ open, setOpen }: Props) => {


    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>New Location</DialogTitle>
            <DialogContent sx={{ width: 300 }}>
                <Box>
                    <Typography>New Location Here...</Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button sx={{ color: "#3F72AF" }} onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant='contained' sx={{ bgcolor: "#3F72AF", "&:hover": { bgcolor: "#1976D2" }, width: 100, height: 38 }}>
                    Create
                </Button>

            </DialogActions>
        </Dialog>
    )
}

export default NewLocationDialog