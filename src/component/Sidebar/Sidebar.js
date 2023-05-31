import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import LaptopIcon from '@mui/icons-material/Laptop';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import QueueIcon from '@mui/icons-material/Queue';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import MainContent from '../MainContent/MainContent';

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          {/* <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography> */}
          <Box sx={{display:'flex', justifyContent:'flex-end', paddingLeft:'1500px'}}>
            <AccountCircleIcon></AccountCircleIcon>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#F5F5F5',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                    <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={"DashBoard"} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                    <AirplaneTicketIcon />
                    </ListItemIcon>
                    <ListItemText primary={"My Ticket"} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                    <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary={"My Profile"} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Users"} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                    <LaptopIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Assets"} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                    <TypeSpecimenIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Ticket Type"} />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                    <QueueIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Ticket Queue"} />
                </ListItemButton>
            </ListItem>

        </List>
            
        <Divider />

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* MainContent contain add ticket type button and table */}
        <MainContent/>
        
      </Box>
    </Box>
  );
}