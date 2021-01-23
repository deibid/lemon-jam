import { createMuiTheme } from '@material-ui/core';


const primaryBlue = '#26AAED';
const secondaryBlue = '#58B4E2';
const accentBlue = '#00517E';
const lightBlue = '#77BADD';
const mediumBlue = '#107AAE';
const darkBlue = '#00517E'



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
      accentBlue: accentBlue,
      lightBlue: lightBlue,
      mediumBlue: mediumBlue,
      darkBlue: darkBlue

    }
  }
});


export default theme;