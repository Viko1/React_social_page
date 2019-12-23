import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postData = props.posts.map( p => <Post message = {p.message } likesCount = {p.likesCount}/>);

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