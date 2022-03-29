import React, {useContext} from 'react';
import UserContext from './context/UserContext';
import JoblyApi from './api';

function Profile(){
    const user = useContext(UserContext);

    const userinfo = async(username) =>{
        const res = await JoblyApi.get(user.username);
        return res;
    }

    return(
        <div>
            <h3>Profile</h3>
            {userinfo}
        </div>
    );
}

export default Profile;