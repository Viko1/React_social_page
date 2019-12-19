import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi how are u', likesCount: 12},
        {id: 2, message: "It's my firs post", likesCount: 10},
        {id: 3, message: 'How are u?'},
        {id: 4, message: 'Yo1'},
        {id: 5, message: 'yo2'},
        {id: 6, message: 'Yo3'},
    ]

    return (
        <div className={s.content}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message = {postData[0].message } likesCount = {postData[0].likesCount}/>
                <Post message = {postData[1].message} likesCount = {postData[1].likesCount}/>

            </div>
        </div>)
};

export default MyPosts;