import { defaultTheme } from 'react-admin';
import { ThemeOptions } from '@mui/material';

export const darkTheme = {
  palette: {
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#FBBA72',
    },
    mode: 'dark' as 'dark', // Switching the dark mode on is a single property value change.
  },
  shape: {
    borderRadius: 8,
  },
  sidebar: {
    width: 240,
  },

  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: '3px solid #000',
          '&.RaMenuItemLink-active': {
            borderLeft: '3px solid #90caf9',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: '#ffffffb3',
        },
      },
    },
  },
};

export const LightTheme = {
  palette: {
    background: {

      default: '#3f51b5',
    },
    secondary: {
      
      light: '#6ec6ff',
      dark: '#0069c0',
      contrastText: '#fff',
    },
  },

  typography: {
    h6: {
      fontWeight: 400,
    },
  },
  sidebar: {
    width: 240,
    closedWidth: 50,
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          '&$disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled' as const,
        margin: 'dense' as const,
        size: 'small' as const,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'filled' as const,
        margin: 'dense' as const,
        size: 'small' as const,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0.5rem',
        },
      },
    },
  },
};
