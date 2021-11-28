import { makeStyles } from '@material-ui/core';


export const useStyles = makeStyles({
  body: {
    margin: '20px 0',
    paddingBottom: 5,
    borderTop: '3px solid #0dcaf0',
    '& *': {
      marginTop: 7,
    },
    '& span': {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',

      '& button': {
        marginLeft: '-2px',
        border: '1px solid gray',

        '& *': {
          margin: '0 auto'
        }
      }
    },
  },
  register: {
    '& *': {
      textDecoration: 'none',
      color: 'inherit',
    }
  },
  showPasswordButton: {
    margin: '0 auto',
    '& svg': {
      marginLeft: 10
    }
  },
  footer: {
    paddingTop: 10,
  },
  hide: {
    display: 'none',
    margin: 30,
  },
})