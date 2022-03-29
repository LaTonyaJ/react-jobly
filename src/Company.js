import React from 'react';
import { useParams } from 'react-router-dom';
import Jobs from './Job';

function Company({jobs}){
    const {name} = useParams();
    let job = jobs.filter(j => j.companyHandle === name);

    return(
        <div>
            <Jobs jobs={job} />
        </div>
    );
}

export default Company;