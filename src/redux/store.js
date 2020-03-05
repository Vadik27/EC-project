import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you ?", likesCount: 30 },
                { id: 2, message: "It's my first post", likesCount: 11 },
                { id: 3, message: "Yo", likesCount: 0 },
                { id: 4, message: "Hello world! Hello world! Hello world!", likesCount: 1 }
            ],
            newPostText: 'IT-KAMASUTRA.COM'
        },
        dialogsPage: {
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
                { id: 4, message: "Hello world! What is it?" }
            ],
            newMessageBody: ""
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        //sidebarReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }

}

export default store;

window.store = store;