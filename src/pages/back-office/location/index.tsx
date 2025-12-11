import BackOfficeLayout from '@/components/BackOfficeLayout'
import NewLocationDialog from '@/components/NewLocationDialog';
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react';

const Location = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <BackOfficeLayout>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => setOpen(true)} variant="contained" sx={{ bgcolor: "#3F72AF", "&:hover": { bgcolor: "#1976D2" } }}>
            New Location
          </Button>
        </Box>

        <NewLocationDialog open={open} setOpen={setOpen} />
      </Box>
    </BackOfficeLayout>
  )
}

export default Location;