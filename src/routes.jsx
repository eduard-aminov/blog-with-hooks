import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Article from './pages/article/Article'
import Auth from './pages/auth/Auth'
import CreateArticle from './pages/createArticle/CreateArticle'
import EditArticle from './pages/editArticle/EditArticle'
import GlobalFeed from './pages/globalFeed/GlobalFeed'
import Settings from './pages/settings/Settings'
import TagFeed from './pages/tagFeed/TagFeed'
import UserProfile from './pages/userProfile/UserProfile'
import YourFeed from './pages/yourFeed/YourFeed'

const Routes = () => {
    return (
        <Switch>
            <Route path={'/'} component={GlobalFeed} exact />
            <Route path={'/profiles/:slug'} component={UserProfile} />
            <Route path={'/profiles/:slug/favorites'} component={UserProfile} />
            <Route path={'/article/:slug/edit'} component={EditArticle} />
            <Route path={'/article/:slug'} component={Article} />
            <Route path={'/articles/new'} component={CreateArticle} />
            <Route path={'/feed'} component={YourFeed} />
            <Route path={'/tags/:slug'} component={TagFeed} />
            <Route path={'/login'} component={Auth} />
            <Route path={'/register'} component={Auth} />
            <Route path={'/settings'} component={Settings} />
        </Switch>
    )
}

export default Routes