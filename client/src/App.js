import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './core/components/navbar/Navbar'
import Landing from './core/components/layout/AuthLayout/AuthLayout'
import Login from './modules/Auth/Login'
import Register from './modules/Auth/Register'
import Profile from './modules/User/Profile'

// Redux
import {Provider} from 'react-redux'

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Navbar/>
                        <Route exact path="/" component={Landing}/>
                        <div className="container">
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/profile" component={Profile}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;