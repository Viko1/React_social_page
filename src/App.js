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
                        addPost={ props.addPost }
                        updateNewPostText = {props.updateNewPostText}
                    />}/>
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/news' render={ () => <Profile/>}/>
                    <Route path='/music' render={ () => <Profile/>}/>
                    <Route path='/settings' render={ () => <Profile/>}/>
                    <Route path='/friends' render={ () => <Friends state={props.state.friendsPage.friends}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
