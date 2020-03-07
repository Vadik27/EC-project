import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import {compose} from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("some errors");
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route
                            exact path='/'
                            render={() => (<Redirect to="/profile"/>)}/>
                        <Route
                            path='/dialogs'
                            render={() => (<DialogsContainer/>)}/>
                        <Route
                            path='/profile/:userId?'
                            render={() => (<ProfileContainer/>)}/>
                        <Route
                            path='/users'
                            render={() => (<UsersContainer/>)}/>
                        <Route
                            path='/login'
                            render={() => (<Login/>)}/>
                        <Route
                            path='/news'
                            render={() => (<News/>)}/>
                        <Route
                            path='/music'
                            render={() => (<Music/>)}/>
                        <Route
                            path='/settings'
                            render={() => (<Settings/>)}/>
                        <Route
                            path='*'
                            render={() => (<div>404 NOT FOUND</div>)}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStatetoProps, {initializeApp})
)(App);
