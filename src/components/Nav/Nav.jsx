import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Badge,Avatar} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

function Nav() {
  return (
    <React.Fragment>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#FFFF"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{color:"#44a08d"}}>
            MB
          </Typography>
          <div style={{gap:"4"}}>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              style={{ color: '#00000' }}
              >
              <Badge badgeContent={17} color="success" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
            size="large"
            aria-label="show 17 new notifications"
            style={{ color: '#00000' }}
            >
            <LogoutIcon/>

            </IconButton>

            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://i.ibb.co/s1Yx7mt/R.png" />
              </IconButton>
            </Tooltip>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
    
    </React.Fragment>
  )
}

export default Nav