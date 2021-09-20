import React from 'react';
import {
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        minWidth: 280,
        maxWidth: 280,
        marginTop: '2rem',
        margin: '0 14px',
    },
    media: {
        margin: '0 auto',
        height: 180,
        borderBottom: '1px solid gray',
    },
    header: {
        borderBottom: '3px solid #0dcaf0'
    }
});

const FeedCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} id={props.id}>
            <CardContent>
                <Typography className={classes.header} gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default FeedCard;