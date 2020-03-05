import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../components/common/FormsControls/FormsControls'
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[requiredField, maxLength30]}
                    component={Textarea}
                    name={"newMessageBody"}
                    placeholder={"Enter your message"} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);