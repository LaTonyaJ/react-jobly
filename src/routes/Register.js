import React, {useState} from 'react';
import {Form, Label, Input, FormGroup, Button} from 'reactstrap';
import { useHistory } from 'react-router-dom';



function Register({login}){
    const history = useHistory();

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
        e.preventDefault();
        const result = await login(formData);
        if(result){
            history.push("/companies");
        }else{
            console.log(result.error);
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