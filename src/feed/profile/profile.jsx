import React from 'react';
import { Box } from '@mui/system';
import User from './user';

const Profile = () => {
    return (
        <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
            <User />
            {/* profile-body */}
        </Box>
    )
}

export default Profile;