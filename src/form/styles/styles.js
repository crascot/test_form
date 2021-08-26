import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles({
    body: {
      margin: '20px 0',
      paddingBottom: 5,
      borderTop: '3px solid #0dcaf0',
  
      '& *': {
        width: '100%',
        marginTop: 7,
      },
    },
    register: {
      '& *': {
        textDecoration: 'none',
        color: 'inherit',
      }
    },
    hide: {
      display: 'none',
      margin: 30,
    },
  })