import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   
    return (
        <div className={s.item}>
            <img src='http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg' />
            {props.message}
            <div>
                <span> like </span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post; 