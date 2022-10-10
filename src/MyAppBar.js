import * as React from 'react';

// import Logo from './Logo';
import { defaultTheme, Layout, AppBar, ToggleThemeButton } from 'react-admin';
import { createTheme, Box, Typography } from '@mui/material';
import { darkTheme, LightTheme, defaultTheme1 } from './themes';

const MyAppBar = (props) => (
  <AppBar
    sx={{
      '& .RaAppBar-title': {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },
    }}
    {...props}
  >
    <Typography
      variant="h6"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Mealster
    </Typography>
    <Box flex="1">
      <Typography variant="h6" id="react-admin-title"></Typography>
    </Box>
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
    
  </AppBar>
);

export default MyAppBar;
