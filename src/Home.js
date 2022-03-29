import React, {useContext} from 'react';
import UserContext from './context/UserContext';

function Home(){
    const user = useContext(UserContext);

    return(
        <div>
            <h1>Welcome to Jobly {user.firstName}!</h1>
            <p>Your next career a click a way....</p>
        </div>
    );
} 

export default Home;