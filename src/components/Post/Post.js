import React from 'react';
import { useHistory, useParams } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComment = id =>  {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2>Post ID : {id} {title}</h2>
            <p>{body}</p>
            <button onClick={()=> showComment(id)}>Show Details</button>
        </div>
    );
};

export default Post;