import React, {useContext, useState} from 'react';
import UserContext from '../context/UserContext';
import {
    Form,
    Input,
    Label,
    Card,
    FormGroup,
    Button
    } from 'reactstrap';
import JoblyApi from '../api';

function Profile(){
    const user = useContext(UserContext);
    const [formData, setformData] = useState(user.currentUser);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setformData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const updatedUser = await JoblyApi.update(user.currentUser.username, formData);
        user.setCurrentUser(updatedUser);

    }

    return(
        <div>
            <h3>Profile</h3>
            <div>
                <Card>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>First Name </Label>
                            <Input 
                            type='text'
                            name='firstName'
                            placeholder={user.currentUser.firstName}
                            onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name </Label>
                            <Input 
                            type='text'
                            name='lastName'
                            placeholder={user.currentUser.lastName}
                            onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email </Label>
                            <Input 
                            type='text'
                            name='email'
                            placeholder={user.currentUser.email}
                            onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Enter password to make changes </Label>
                            <Input 
                            type='password'
                            name='password'
                            onChange={handleChange}
                            />
                        </FormGroup>
                        <Button>Make Changes</Button>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default Profile;