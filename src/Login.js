import React, {useState} from 'react';
import {
    Form,
    Input,
    Label,
    Card,
    FormGroup,
    Button
} from 'reactstrap';
import JoblyApi from './api';
import {useHistory} from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';

function Login({login}){
    const history = useHistory();
    const [formData, setformData] = useState({
        username: '',
        password: ''
    });
    const [token, setToken] = useLocalStorage('token');

    const handleChange =(e) =>{
        const {name, value} = e.target;
        setformData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit =async(e) =>{
        e.preventDefault();
        try{
            const token = JoblyApi.login({...formData});
            const userToken = token.toString();
            JoblyApi.token = userToken;
            setToken(userToken);
            login({...formData});
            history.push('/');
        }
        catch(err){
            
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