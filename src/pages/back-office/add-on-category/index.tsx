import BackOfficeLayout from '@/components/BackOfficeLayout'
import NewAddonCategoryDialog from '@/components/NewAddonCategoryDialog';
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react';

const AddOnCategory = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <BackOfficeLayout>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => setOpen(true)} variant="contained" sx={{ bgcolor: "#3F72AF", "&:hover": { bgcolor: "#1976D2" } }}>
            New Addon Category
          </Button>
        </Box>

        <NewAddonCategoryDialog open={open} setOpen={setOpen}/>
      </Box>
    </BackOfficeLayout>
  )
}

export default AddOnCategory;