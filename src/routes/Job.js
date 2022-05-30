import React, {useEffect, useState} from 'react';
import JoblyApi from '../api';
import { 
    CardBody, 
    CardText, 
    CardTitle, 
    Card, 
    Button, 
    CardSubtitle 
} from 'reactstrap';
import '../css/job.css';

function Job(){
    const [jobs, setJobs] = useState([]);
    const [applied, setApplied] = useState([]);

    useEffect(() => {
        async function getJobs(){
        const jobs = await JoblyApi.getJobs();
        setJobs(jobs);
        }
        getJobs();
    },[]);

    const Apply =(id) =>{
        setApplied(j => j.id === id);   // JoblyApi.applyToJob()
    }
    
    return(
        <div>
            {jobs.map(j =>
            (<div id={j.id} key={j.id}>
                <Card key={j.id} className='jobCard'>
                    <CardBody>
                        <CardTitle>{j.title}</CardTitle>
                            <CardSubtitle>
                                {j.companyName}
                            </CardSubtitle>
                        <CardText>
                            <p>Salary: {j.salary ? j.salary: 'No Salary posted'}</p>
                            <p>Equity: {j.equity ? j.equity: 'No available Equity'}</p>
                        </CardText>
                        <Button onClick={Apply}>
                            {applied === false ? 'Apply': 'Applied'}
                        </Button>
                    </CardBody>
                </Card>
            </div>
            ))};
        </div>
    );
}

export default Job;