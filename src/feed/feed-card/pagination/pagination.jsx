import React from 'react';
import { Button } from '@material-ui/core';


const Pagination = ({ cardsLength, totalCards, paginate }) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalCards / cardsLength); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            {
                pageNumbers.map(number => (
                    <Button onClick={() => paginate(number)}>{number}</Button>
                ))
            }
        </div>
    )
}

export default Pagination;