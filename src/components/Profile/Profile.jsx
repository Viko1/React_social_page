import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {



    return (
        <div >
            <ProfileInfo/>
            <div>
                <MyPosts posts={props.state.posts}/>
            </div>


        </div>)
}

export default Profile;