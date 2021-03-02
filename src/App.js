import React, { useEffect } from 'react';
import { HomeDefault } from './pages';
import Login from './pages/login';
import { Signup } from './pages/signUp';
import { firebase, db, auth } from './firebase.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import './style/main.scss';
import { AuthContext, AuthProvider } from './provider/provider'
const App = () => {
    let path = window.location.pathname;
    if (path != '/' && (path!= '/login' && path != '/signup')) {
        path = path.substring(1);
        db.doc(`short/${path}`).get().then((snap) => {
            if (snap.exists) {
                let url = snap.data().og;
                let check = "https://";
                if (url.includes(check) == false) {
                    url = check.concat('', url);
                }
                window.location.href = url;
            }
            else alert("Can't find this Shortened URL.");
        })
    }
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/signup" exact>
                        <Signup />
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App;