import React, { useState } from 'react';
import { Box } from '@mui/system';
import User from './user';
import Info from './info';

const Profile = ({ feedUser }) => {
    const [edit] = useState(false)

    return (
        <Box display="flex" justifyContent="center" style={{ margin: 8, width: '100%' }}>
            <User edit={edit} feedUser={feedUser} />
            <Info feedUser={feedUser} />
        </Box>
    )
}

export default Profile;