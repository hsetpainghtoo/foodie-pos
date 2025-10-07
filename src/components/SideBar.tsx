import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CategoryIcon from '@mui/icons-material/Category';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ClassIcon from '@mui/icons-material/Class';
import EggIcon from '@mui/icons-material/Egg';
import TableBarIcon from '@mui/icons-material/TableBar';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Link from 'next/link';

const SideBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const sidebarItems = [
    // {id: 1, name: "Menu", link: "/back-office/menu", icon: <RestaurantMenuIcon />},
    // {id: 2, name: "Menu Category", link: "/back-office/menu-category", icon: <MenuBookIcon />}

    {
      id: 1,
      label: "Orders",
      icon: <LocalMallIcon />,
      link: "/back-office/order"
    },
    {
      id: 2,
      label: "Menu Categories",
      icon: <CategoryIcon />,
      link: "/back-office/menu-category"
    },
    {
      id: 3,
      label: "Menus",
      icon: <LocalDiningIcon />,
      link: "/back-office/menu"
    },
    {
      id: 4,
      label: "Addon Categories",
      icon: <ClassIcon />,
      link: "/back-office/add-on-category"
    },
    {
      id: 5,
      label: "Addons",
      icon: <EggIcon />,
      link: "/back-office/add-on"
    },
    {
      id: 6,
      label: "Tables",
      icon: <TableBarIcon />,
      link: "/back-office/table"
    },
    {
      id: 7,
      label: "Locations",
      icon: <LocationOnIcon />,
      link: "/back-office/location"
    },

  ]

  return (
    <Box sx={{ width: 250, height: '93vh', bgcolor: "#DBE2EF" }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {sidebarItems.map((item, index) => (
          <Link href={item.link} key={index} style={{ textDecoration: 'none', color: '#112D4E' }}>
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {['Setting'].map((item, index) => (
          <Link href="/back-office/setting" key={index} style={{ textDecoration: 'none', color: '#112D4E' }}>
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>

  )
}

export default SideBar