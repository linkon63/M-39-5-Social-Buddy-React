import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    },[]);
    const {userID, title, body} = post;

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data))
    },[]);

    return (
        <div>
            <h1>This is Post Details : {id}</h1>
            <h5>{userID}</h5>
            <h5>{title}</h5>
            <h5>{body}</h5>
            <h3>Total Comments : {comments.length}</h3>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetails;