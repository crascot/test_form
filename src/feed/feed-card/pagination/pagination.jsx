import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pagination: {
        width: '100%',
        marginTop: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    num: {
        width: 30,
        margin: '10px 3px',
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    }
});

const Pagination = ({ cardsLength, totalCards, paginate }) => {
    const classes = useStyles();

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsLength); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={classes.pagination}>
            {
                pageNumbers.map(number => (
                    <Button onClick={() => paginate(number)}
                        className={classes.num}
                        size="small"
                        key={number}
                    >
                        {number}
                    </Button>
                ))
            }
        </div>
    )
}

export default Pagination;