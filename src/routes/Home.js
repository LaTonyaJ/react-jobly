import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

function Home(){
    const user = useContext(UserContext);

    return(
        <div>
            {user.currentUser ?  (<h1>Welcome back, {user.currentUser.firstName}!</h1>) : (<h1>Welcome to Jobly!</h1>) }
            <p>Your next career a click a way....</p>
        </div>
    );
} 

export default Home;