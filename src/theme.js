import { createMuiTheme } from '@material-ui/core';


const primaryBlue = '#0A2E64';
const secondaryBlue = '#3D567E';
const accentBlue = '#697C9C';



const theme = createMuiTheme({

  overrides: {
    MuiToggleButton: {
      root: {
        background: primaryBlue,
        color: '#FFF',
        border: 'none',
        borderRadius: 5,
        '&$selected': {
          background: `${accentBlue} !important`,
          color: '#FFF',
          border: `1px solid ${accentBlue}`,
          borderRadius: 5,
        }
      },
    }
  },
  palette: {
    common: {
      primaryBlue: primaryBlue,
      secondaryBlue: secondaryBlue,
      accentBlue: accentBlue
    }
  }
});


export default theme;