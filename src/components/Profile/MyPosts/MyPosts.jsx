import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi how are u', likesCount: 12},
        {id: 2, message: "It's my firs post", likesCount: 10},
        {id: 3, message: 'How are u?', likesCount: 0},
        {id: 4, message: 'Yo1', likesCount: 1},
        {id: 5, message: 'yo2', likesCount: 1},
        {id: 6, message: 'Yo3', likesCount: 0},
    ]

    let postData = posts.map( p => <Post message = {p.message } likesCount = {p.likesCount}/>);

    return (
        <div className={ s.content }>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={ s.posts }>
                { postData }
            </div>
        </div>)
};

export default MyPosts;