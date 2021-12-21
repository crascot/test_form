import React, { useState } from 'react';
import { Box } from '@mui/system';
import User from './user';
import Info from './info';

const Profile = ({ feedName }) => {
    const [edit, setEdit] = useState(false)
    const editUser = () => {
        if (edit === true) setEdit(false)
        else setEdit(true)
    }

    return (
        <Box display="flex" justifyContent="center" style={{ margin: 8, width: '100%' }}>
            <User edit={edit} />
            <Info feedName={feedName} edit={edit} editUser={editUser} />
        </Box>
    )
}

export default Profile;