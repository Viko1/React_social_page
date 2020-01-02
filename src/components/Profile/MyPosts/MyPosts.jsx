import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let postData = props.posts.map( p => <Post message = {p.message } likesCount = {p.likesCount}/>);

    let addPost = () => {
        props.dispatch({type: 'ADD-POST' });

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(({type: 'UPDATE-NEW-POST-TEXT' , newText: text }));
    }

    return (
        <div className={ s.content }>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref= { newPostElement } value={props.newPostText}/>
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={ s.posts }>
                { postData }
            </div>
        </div>)
};

export default MyPosts;