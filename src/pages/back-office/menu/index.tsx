import BackOfficeLayout from '@/components/BackOfficeLayout'
import NewMenuDialog from '@/components/NewMenuDialog';
import { NewMenu } from '@/types/menu';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [newMenu, setNewMenu] = useState<NewMenu>({ name: "", price: 0 });
  return (
    <BackOfficeLayout>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => setOpen(true)} variant="contained" sx={{ bgcolor: "#3F72AF", "&:hover": { bgcolor: "#1976D2" } }}>
            New Menu
          </Button>
        </Box>

        <NewMenuDialog open={open} setOpen={setOpen} newMenu={newMenu} setNewMenu={setNewMenu} />
      </Box>
    </BackOfficeLayout>
  )
}

export default Menu;