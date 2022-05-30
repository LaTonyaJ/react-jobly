import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {
    Form,
    Input,
    Label,
    Card,
    FormGroup,
    Button
} from 'reactstrap';

function Login({login}){
    const history = useHistory();

    const [formData, setformData] = useState({
        username: '',
        password: ''
    });

    const handleChange =(e) =>{
        const {name, value} = e.target;
        setformData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const result = await login(formData);
        console.log(result)
        if(result){
            history.push('/companies')
        }else{
        console.error()
        }
    }

    return(
        <div>
            <Card>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label>Username: </Label>
                <Input
                type='text'
                name='username'
                onChange={handleChange}
                />
                </FormGroup>
                <FormGroup>
                <Label>Password: </Label>
                <Input 
                type='password'
                name='password'
                onChange={handleChange}
                />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            </Card>
        </div>
    );
}

export default Login;