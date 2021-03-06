import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route} from "react-router-dom";







function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={ props.dispatch }
                    />}/>
                    <Route path='/dialogs' render={ () => <Dialogs  store = {props.store}/>}/>
                    <Route path='/news' render={ () => <Profile/>}/>
                    <Route path='/music' render={ () => <Profile/>}/>
                    <Route path='/settings' render={ () => <Profile/>}/>
                    <Route path='/friends' render={ () => <Friends
                        friendsPage = {props.state.friendsPage}
                        dispatch={ props.dispatch }
                    />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
