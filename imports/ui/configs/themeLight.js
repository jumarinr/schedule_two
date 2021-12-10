import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const fonts = 'Ropa Sans';

const themeLight = createTheme({
  typography: {
    fontFamily: fonts,
  },
  palette: {
    background: {
      default: colors.purple[300],
    },
    primary: {
      main: colors.blue[700],
    },
    error: {
      main: colors.red[800],
    },
    warning: {
      main: colors.orange[700],
    },
  },
});

export default themeLight;
