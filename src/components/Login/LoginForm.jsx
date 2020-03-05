import React from 'react'
import s from '../common/FormsControls/FormsControls.module.css'
import { Input, createField } from './../common/FormsControls/FormsControls'
import { requiredField } from '../../utils/validators/validators'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        < form onSubmit={handleSubmit}>
            {createField("Enter your email", "email", Input, [requiredField])}
            {createField("Enter your password", "password", Input, [requiredField], { type: "password" })}
            {createField(null, "rememberMe", Input, [], { type: "checkbox" }, "Remember me")}

            { captchaUrl && <img src={captchaUrl} /> }
            { captchaUrl && createField("Symbol from image", "captcha", Input, [requiredField]) }

            {
                error && <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Submit</button>
            </div>
        </form >
    )
}

export default LoginForm;