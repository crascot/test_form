import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography,
    Button,
    TextField,
} from '@material-ui/core';
import {
    Menu,
    MenuItem
} from '@mui/material';

const useStyles = makeStyles({
    block: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0dcaf0',
        margin: '0 -15xp',
        padding: '15px'
    },
    center: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '30%',
        textAlign: 'center'
    },
    name: {
        fontSize: 25
    }
});

const FeedHeader = ({ setToken, nickname, search, setSearch }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null)
    const [feedName] = useState(nickname)

    const open = Boolean(anchorEl)

    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const leave = () => setToken(localStorage.removeItem('auth_token'))

    return (
        <Box className={classes.block}>

            <Typography variant="h4">Test-Form</Typography>
            <div className={classes.center}>
                <TextField label="Пойск..." value={search} onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div>
                <Button
                    style={{ textTransform: 'capitalize' }}
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Typography variant="body1" className={classes.name}>
                        {feedName}
                    </Typography>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={leave}>Выйти</MenuItem>
                </Menu>
            </div>
        </Box>
    )
}

export default FeedHeader;