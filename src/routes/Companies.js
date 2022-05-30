import React, {useEffect, useState} from 'react';
import JoblyApi from '../api';
import {
    Card, 
    CardImg, 
    CardBody, 
    CardText, 
    CardTitle} 
from 'reactstrap';
import '../css/companies.css';


function Companies(){
    const [companies, setCompanies] = useState([]);

    
    useEffect(() => {
        async function getCompanies(){
        const comps = await JoblyApi.getCompanies();
        setCompanies(comps);
        }
        getCompanies();
    },[]);
    

    return(
        <div>
            <h3>Companies</h3>
            {companies.map(c =>
            (<a href={`companies/:${c.handle}`}>
            <Card 
                key={c.handle} 
                className='compCard'
                >
                <CardImg src={c.logoUrl}/>
                <CardBody>
                    <CardTitle>{c.name}</CardTitle>
                    <CardText>{c.description}</CardText>
                </CardBody>
            </Card>
            <br />
            </a>))}
        </div>
    );
}

export default Companies;