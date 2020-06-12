import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Article from './pages/article/Article'
import Auth from './pages/auth/Auth'
import CreateArticle from './pages/createArticle/CreateArticle'
import EditArticle from './pages/editArticle/EditArticle'
import GlobalFeed from './pages/globalFeed/GlobalFeed'
import TagFeed from './pages/tagFeed/TagFeed'
import YourFeed from './pages/yourFeed/YourFeed'

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} component={GlobalFeed} exact />
            <Route path={'/article/:slug/edit'} component={EditArticle} />
            <Route path={'/articles/new'} component={CreateArticle} />
            <Route path={'/feed'} component={YourFeed} />
            <Route path={'/tags/:slug'} component={TagFeed} />
            <Route path={'/login'} component={Auth} />
            <Route path={'/register'} component={Auth} />
            <Route path={'/article/:slug'} component={Article} />
        </Switch>
    )
}

export default Routes