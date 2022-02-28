import React, {useContext, useEffect, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import TagList from '../../components/TagList'
import {CurrentUserContext} from '../../contexts/currentUserContext'
import useFetch from '../../hooks/useFetch'

const Article = ({match}) => {
    const slug = match.params.slug
    const apiUrl = `/articles/${slug}`
    const [{
        response: fetchArticleResponse,
        isLoading: fetchArticleIsLoading,
        error: fetchArticleError},
        doFetchArticle
    ] = useFetch(apiUrl)
    const [{response: deleteArticleResponse}, doDeleteArticle] = useFetch(apiUrl)
    const [currentUserState] = useContext(CurrentUserContext)
    const [successfullDelete, setSuccessfulDelete] = useState(false)

    const isAuthor = () => {
        if (!fetchArticleResponse || !currentUserState.isLoggedIn) {
            return false
        }
        return currentUserState.currentUser.username === fetchArticleResponse.article.author.username
    }

    useEffect(() => {
        doFetchArticle()
    },[doFetchArticle])

    useEffect(() => {
        if (!deleteArticleResponse) {
            return
        }
        setSuccessfulDelete(true)
    }, [deleteArticleResponse])

    const deleteArticle = () => {
        doDeleteArticle({
            method: 'delete'
        })
    }

    if (successfullDelete) {
        return <Redirect to={'/'}/>
    }

    return (
        <div className="article-page">
            <div className="banner">
                {!fetchArticleIsLoading && fetchArticleResponse && (
                    <div className="container">
                        <h1>{fetchArticleResponse.article.title}</h1>
                        <div className="article-meta">
                            <Link to={`/profiles/${fetchArticleResponse.article.author.username}`}>
                                <img src={fetchArticleResponse.article.author.image} alt=""/>
                            </Link>
                            <div className="info">
                                <Link to={`/profiles/${fetchArticleResponse.article.author.username}`}>
                                    {fetchArticleResponse.article.author.username}
                                </Link>
                                <span className="date">{fetchArticleResponse.article.createdAt}</span>
                                <div>
                                    {isAuthor() && (
                                        <span>
                                            <Link
                                                className='btn btn-outline-secondary btn-sm'
                                                to={`/article/${fetchArticleResponse.article.slug}/edit`}
                                            >
                                                <i className='ion-edit'></i>
                                                &nbsp; Edit Article
                                            </Link>
                                            &nbsp;
                                            <button
                                                className='btn btn-outline-danger btn-sm'
                                                onClick={deleteArticle}
                                            >
                                                <i className='ion-trash-a'></i>
                                                &nbsp; Delete Article
                                            </button>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="container page">
                {fetchArticleIsLoading && <Loading/>}
                {fetchArticleError && <ErrorMessage/>}
                {!fetchArticleIsLoading && fetchArticleResponse && (
                    <div className="row article-content">
                        <div className="col-xs-12">
                            <div>
                                <p>{fetchArticleResponse.article.body}</p>
                            </div>
                            <TagList tags={fetchArticleResponse.article.tagList} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Article