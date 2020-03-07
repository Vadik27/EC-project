const UPDATE_NEW_MESSAGE_BODY = 'samurai-network/dialogs/UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'samurai-network/dialogs/SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: "Alexandr" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Dimych" },
        { id: 4, name: "Maryna" },
        { id: 5, name: "Alexandr" },
        { id: 6, name: "Ann" },
        { id: 7, name: "Lena" }
    ],
    messages: [
        { id: 1, message: "Hi! I'm Vadim." },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Hello world!" }
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }

        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 8, message: body }]
            };
        }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;