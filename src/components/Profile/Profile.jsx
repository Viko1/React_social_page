import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'/>
            </div>
            <div>
                <MyPosts/>
            </div>


        </div>)
}

export default Profile;