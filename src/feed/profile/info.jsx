import React from 'react';
import {
    Grid,
    Box,
    Typography,
    Button,
    Select,
    MenuItem,
    Input,
    Alert,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getChange, editor } from '../../redux/features/profile/profileSlice';
import { setUser } from '../../redux/features/profile/profileSlice';


const useStyles = makeStyles({
    info: {
        margin: '30px 15px',
    },
    blockData: {
        margin: '5px 0 !important',
        paddingTop: '0 !important'
    },
    mainTitle: {
        textAlign: 'center',
    },
    title: {
        margin: '0 !important',
        marginRight: '10px !important'
    },
    data: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        overflow: 'hidden',
        marginBottom: 4,
    },
    input: {
        width: 150,
        marginBottom: 2,
    },
    alert: {
        width: 'max-content',
        margin: '0 auto',
        padding: '0 10px !important'
    },

    footer: {
        width: '100%',
        height: '100%',
        marginTop: 30,
        display: 'flex',
        justifyContent: 'flex-end'
    },
});

const Info = ({ newUser, column }) => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const edit = useSelector(state => state.profile.edit)

    const updateData = (key) => (e) => dispatch(setUser({ ...newUser, [key]: e.target.value }))

    return (
        <Box className={`${classes.info} + info`}>
            <div>
                <Typography variant="h3" component="div" gutterBottom className={`${classes.mainTitle} + main-title`}>
                    Персональные данные
                </Typography>

                <div className='container-data'>
                    <Grid container columns={16} direction={column}>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={7}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Имя:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={newUser.name} onChange={updateData('name')} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 180 }} component="p" key={newUser.name} gutterBottom>{newUser.name}</Typography>
                            }
                        </Grid>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={9}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Дата рождения:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={newUser.birthday} onChange={updateData('birthday')} type='date' />
                                    :
                                    <span>
                                        {
                                            newUser.birthday ?
                                                <Typography variant="h6" style={{ marginBottom: 4 }} component="p" key={newUser.birthday} gutterBottom>{newUser.birthday}</Typography>
                                                :
                                                <Alert className={classes.alert} severity="warning">Не указано</Alert>
                                        }
                                    </span>
                            }
                        </Grid>
                    </Grid>
                    <Grid container columns={16} direction={column}>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Пол:
                            </Typography>
                            <span>
                                {
                                    edit ?
                                        <Select value={newUser.gender} onChange={updateData('gender')}>
                                            <MenuItem value={'Мужской'}>Мужской</MenuItem>
                                            <MenuItem value={'Женский'}>Женский</MenuItem>
                                        </Select>
                                        :
                                        <Typography variant="h6" style={{ marginBottom: 4 }} gutterBottom component="p" key={newUser.gender}>{newUser.gender}</Typography>
                                }
                            </span>
                        </Grid>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Пароль:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={newUser.password} onChange={updateData('password')} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 165 }} component="p" key={newUser.password} gutterBottom>{newUser.password}</Typography>
                            }
                        </Grid>
                    </Grid>

                    <Grid container columns={16} direction={column}>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Телефон:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={newUser.phone} onChange={updateData('phone')} />
                                    :
                                    <span>
                                        {
                                            newUser.phone ?
                                                <Typography variant="h6" className={classes.data} style={{ maxWidth: 180 }} component="p" key={newUser.phone} gutterBottom>{newUser.phone}</Typography>
                                                :
                                                <Alert className={classes.alert} severity="warning">Не указан</Alert>
                                        }
                                    </span>
                            }
                        </Grid>
                        <Grid display='flex' alignItems='center' className={`${classes.blockData} + block-data`} item xs={8}>
                            <Typography variant="overline" display="block" className={`${classes.title} + title`} gutterBottom>
                                Почта:
                            </Typography>
                            {
                                edit ?
                                    <Input className={classes.input} value={newUser.email} onChange={updateData('email')} />
                                    :
                                    <Typography variant="h6" className={classes.data} style={{ maxWidth: 200 }} component="p" key={newUser.email} gutterBottom>{newUser.email}</Typography>
                            }
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.footer}>
                    {
                        edit ?
                            <Button onClick={() => dispatch(getChange(newUser))} variant="outlined">Сохранить</Button>
                            :
                            <Button onClick={() => dispatch(editor(true))} variant="outlined">Изменить</Button>
                    }
                </div>
            </div>
        </Box>
    )
}

export default Info;