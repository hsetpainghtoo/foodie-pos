import BackOfficeLayout from '@/components/BackOfficeLayout'
import NewMenuCategoryDialog from '@/components/NewMenuCategoryDialog';
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react';

const MenuCategory = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <BackOfficeLayout>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => setOpen(true)} variant="contained" sx={{ bgcolor: "#3F72AF", "&:hover": { bgcolor: "#1976D2" } }}>
            New Menu Category
          </Button>
        </Box>
      </Box>

      <NewMenuCategoryDialog open={open} setOpen={setOpen}/>
    </BackOfficeLayout>
  )
}

export default MenuCategory;