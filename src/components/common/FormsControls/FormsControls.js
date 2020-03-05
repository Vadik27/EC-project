import React from 'react'
import {Field} from 'redux-form'
import s from './FormsControls.module.css'

const FormsControls = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error

    return (
        <div>
            <div className={s.formControl + " " + (hasError && s.error)}>
                {children}
            </div>
            <div className={s.formControl + " " + s.error}>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props
    return <FormsControls {...props}><textarea {...props.input} {...restProps} /></FormsControls>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props
    return <FormsControls {...props}><input {...props.input} {...restProps} /></FormsControls>
}

export const createField = (placeholder, name, component, validators, props = {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validators}
            {...props} /> {text}
    </div>
)