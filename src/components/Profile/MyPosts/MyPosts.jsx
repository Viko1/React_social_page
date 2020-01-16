import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reduser";


const MyPosts = (props) => {


    let newPostElement = React.createRef();

    let postData = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        props.addPost();
        // props.dispatch( addPostActionCreator());

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // let action = updateNewPostActionCreator(text);
        // props.dispatch(action);
    }

    return (
        <div className={s.content}>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postData}
            </div>
        </div>)
};

export default MyPosts;