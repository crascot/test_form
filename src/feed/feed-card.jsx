import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        minWidth: 280,
        maxWidth: 280,
        marginTop: '2rem',
        margin: '0 14px 0 14px'
    },
    media: {
        margin: '0 auto',
        height: 180,
        borderBottom: '1px solid gray',
    },
});

const FeedCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.items.image}
                    title="Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.items.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.items.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default FeedCard;