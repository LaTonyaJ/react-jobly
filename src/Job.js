import React from 'react';
import { 
    CardBody, 
    CardText, 
    CardTitle, 
    Card, 
    Button, 
    CardSubtitle 
} from 'reactstrap';
import './job.css';

function Job({jobs}){
    return(
        <div>
            {jobs.map(j =>
            (<Card key={j.id} className='jobCard'>
                <CardBody>
                    <CardTitle>{j.title}</CardTitle>
                    <CardSubtitle>{j.companyName}
                        </CardSubtitle>
                    <CardText>
                        <p>Salary: {j.salary ? j.salary: 'No Salary posted'}</p>
                        <p>Equity: {j.equity ? j.equity: 'No available Equity'}</p>

                    </CardText>
                    <Button>Apply</Button>
                </CardBody>
            </Card>
            ))};
        </div>
    );
}

export default Job;