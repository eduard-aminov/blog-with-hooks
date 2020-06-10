import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import TopBar from './components/TopBar'
import {CurrentUserProvider} from './contexts/currentUserContext'
import Routes from './routes'

const App = () => {
    return (
        <CurrentUserProvider>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
        </CurrentUserProvider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
