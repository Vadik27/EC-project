import React from 'react'
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import style from '../../common/FormsControls/FormsControls.module.css'
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {
                error && <div className={style.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <b>Full Name: </b>
                {createField("Full name", "fullName", Input, [])}
            </div>
            <div>
                <b>Lookign for a job: </b>
                {createField("", "lookingForAJob", Input, [], {type: "checkbox"})}
            </div>
            <div>
                <b>My skills: </b>
                {createField("Skills", "lookingForAJobDescription", Textarea, [])}
            </div>
            <div>
                <b>About Me: </b>
                {createField("About me...", "aboutMe", Textarea, [])}
            </div>
            <div>
                <b>Contacts: </b>
                {
                    Object.keys(profile.contacts)
                        .map(key => {
                            return <div key={key} className={s.contact}>
                                <b>{key}: {createField(key, "contacts." + key, Input, [])}</b>
                            </div>
                        })
                }
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;