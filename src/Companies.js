import React, {useEffect} from 'react';
import {
    Card, 
    CardImg, 
    CardBody, 
    CardText, 
    CardTitle} 
from 'reactstrap';
import './companies.css';


function Companies({companies}){


    return(
        <div>
            <h3>Companies</h3>
            {companies.map(c =>
            (<a href={`companies/${c.handle}`}>
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