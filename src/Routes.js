import { Route, BrowserRouter, Switch, useHistory } from "react-router-dom";
import React, {useState, useEffect, useContext} from "react";
import Home from './Home';
import Profile from './Profile';
import Companies from './Companies';
import Jobs from './Job';
import Company from './Company';
import Login from './Login';
import Logout from "./Logout";
import Register from './Register';
import JoblyApi from './api.js';
import Nav from "./Nav";
import UserContext from "./context/UserContext";


function Router(){
    const [companies, setCompanies] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const history = useHistory();
    
    useEffect(() => {
        async function getCompanies(){
        const comps = await JoblyApi.getCompanies();
        setCompanies(comps);
        }
        getCompanies();
    }, []);

    useEffect(() => {
        async function getJobs(){
        const jobs = await JoblyApi.getJobs();
        setJobs(jobs);
        }
        getJobs();
    }, []);

    const login = (currentUser)=>{
        setCurrentUser(user =>({...currentUser}));
        console.log(currentUser);
        
    }

    const logout = ()=>{
        setCurrentUser({});
        localStorage.clear();
        JoblyApi.token = '';
        history.push('/');
    }

    
return(
<BrowserRouter>
    <UserContext.Provider value={currentUser}>
    <Nav />
    <Switch>
        <Route path='/profile'>
            <Profile />
        </Route>
        <Route path='/jobs'>
            <Jobs jobs={jobs}/>
        </Route>
        <Route path='/companies/:name'>
            <Company jobs={jobs}/>
        </Route>
        <Route path='/companies'>
            <Companies companies={companies}/>
        </Route>
        <Route path='/login'>
            <Login login={login}/>
        </Route>
        <Route path='/register'>
            <Register login={login} />
        </Route>
        <Route path='/'>
            <Home />
        </Route>
        <Route exact path='/signout'>
            <Logout logout={logout}/>
        </Route>

    </Switch>
    </UserContext.Provider>
</BrowserRouter>
);

}

export default Router;