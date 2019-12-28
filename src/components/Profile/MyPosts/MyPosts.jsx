import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let postData = props.posts.map( p => <Post message = {p.message } likesCount = {p.likesCount}/>);

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    };



    return (
        <div className={ s.content }>
            <div>
                <div>
                    <textarea ref= { newPostElement }></textarea>
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={ s.posts }>
                { postData }
            </div>
        </div>)
};

export default MyPosts;