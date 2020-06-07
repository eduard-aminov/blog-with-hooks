import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Article from './pages/article/Article'
import GlobalFeed from './pages/globalFeed/GlobalFeed'

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} component={GlobalFeed} exact />
            <Route path={'/article/:slug'} component={Article} />
        </Switch>
    )
}

export default Routes