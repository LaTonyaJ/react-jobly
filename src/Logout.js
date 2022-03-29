import React from 'react';

function Logout({logout}){
    return(
        <div>
            <button onClick={logout}>SignOut</button>
        </div>
    )
}

export default Logout;