import { Slider, withStyles } from '@material-ui/core';


export const GraySlider = withStyles(theme => ({
  root: {
    color: theme.palette.common.lightBlue,
    height: 4,
    width: 180
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: theme.palette.common.lightBlue,
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },

  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
}))(Slider);