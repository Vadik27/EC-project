import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

let maxLength15 = maxLengthCreator(15)

const MyPosts = React.memo((props) => {
    console.log("!!render")
    let postsElements = props.posts.map(
        p => (<Post key={p.id} message={p.message} likesCount={p.likesCount} />
        ))

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (        
        <div className={s.postBlock}>
            <h3>My post</h3>
            <AddPostReduxForm onSubmit={addNewPost} />
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
})

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[requiredField, maxLength15]}
                    component={Textarea}
                    name="newPostText"
                    placeholder="Enter your post..." />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: "profileAddPostForm" })(AddPostForm)

export default MyPosts; 