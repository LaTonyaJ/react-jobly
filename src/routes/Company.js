import React from 'react';
import { useParams } from 'react-router-dom';
import Job from './Job';

function Company({jobs}){
    const {name} = useParams();
    let j = jobs.filter(job => job.companyHandle === name);

    return(
        <div>
            <Job jobs={j}/>
        </div>
    );
}

export default Company;