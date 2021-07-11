import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './main.scss';


const Main = () => {
    return (
        <Container fixed>
            <Grid className='head'>head</Grid>
            <Grid className='body'>body</Grid>
            <Grid className='footer'>footer</Grid>
        </Container>
    )
}

export default Main;