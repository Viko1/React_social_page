import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {



    return (
        <div >
            <ProfileInfo/>
            <div>
                <MyPosts posts = { props.profilePage.posts }
                         dispatch = {props.dispatch}
                         newPostText = {props.profilePage.newPostText}
                />
            </div>


        </div>)
}

export default Profile;