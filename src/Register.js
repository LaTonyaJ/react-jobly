import React, {useState} from 'react';
import {Form, Label, Input, FormGroup, Button} from 'reactstrap';
import JoblyApi from './api';
import {useHistory} from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';


function Register({login}){
    const history = useHistory();
    const [token, setToken] = useLocalStorage('token');


    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
    }
    
    const [formData, setformData] = useState(INITIAL_STATE);


    const handleChange = (e) =>{
        const {name, value} = e.target;
        setformData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = async (e) =>{
        try{
        e.preventDefault();
        login({...formData});
        const token = await JoblyApi.registerUser({...formData});
        const userToken = token.toString();
        JoblyApi.token = userToken;
        setToken(userToken);
        setformData(INITIAL_STATE);
        history.push('/')
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='firstName'>First Name</Label>
                    <Input 
                    type='text'
                    name='firstName'
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='lastName'>Last Name</Label>
                    <Input 
                    type='text'
                    name='lastName'
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='username'>Username: </Label>
                    <Input 
                    type='text'
                    name = 'username'
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password: </Label>
                    <Input 
                    type='password'
                    name='password'
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='email'>Email: </Label>
                    <Input 
                    type='email'
                    name='email'
                    onChange={handleChange}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Register;