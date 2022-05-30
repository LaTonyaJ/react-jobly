import { Route, BrowserRouter, Switch, useHistory } from "react-router-dom";
import React, {useState, useEffect} from "react";
import Home from './routes/Home';
import Profile from './routes/Profile';
import Companies from './routes/Companies';
import Job from './routes/Job';
import Company from './routes/Company';
import Login from './routes/Login';
import Register from './routes/Register';
import JoblyApi from './api.js';
import Nav from "./Nav";
import UserContext from "./context/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import { NavbarText } from "reactstrap";
import jwt from 'jsonwebtoken';



function Router(){
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useLocalStorage("jobly-token");

    


   useEffect(() => {
    async function getCurrentUser(){
        if(token){
            try{

                JoblyApi.token = token;
                let {username} = jwt.decode(token);
                const currentUser = await JoblyApi.get(username);
                setCurrentUser(currentUser);

            }catch(err){

                console.error(err);
                setCurrentUser(null);
            }
        }
    }},[token]);
    
    async function signup(data){
        try{
            const user = await JoblyApi.registerUser(data);
            let token = setToken(user);
        }catch(err){
            console.error("Register Error", err);
        }
    }

    async function login(data){
        try{
            const user = await JoblyApi.login(data);
            let token = setToken(user);
            return token
        }catch(err){
            console.error("Login Error", err);
        }
    }

    function logout(){
        setCurrentUser(null);
        setToken(null);
    }

    

    
return(
<BrowserRouter>
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
    <Nav logout={logout}/>
    <Switch>
        <Route path='/profile'>
            <Profile />
        </Route>
        {/* <Route> */}
            {/* <Job /> */}
        {/* </Route> */}
        <Route path='/jobs'>
            <Job />
        </Route>
        <Route path='/companies/:name'>
            <Company />
        </Route>
        <Route path='/companies'>
            <Companies />
        </Route>
        <Route path='/login'>
            <Login login={login}/>
        </Route>
        <Route path='/register'>
            <Register login={signup} />
        </Route>
        <Route path='/'>
            <Home />
        </Route>

    </Switch>
    </UserContext.Provider>
</BrowserRouter>
);

}

export default Router;