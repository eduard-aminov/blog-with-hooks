import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import ArticleForm from '../../components/ArticleForm'
import {CurrentUserContext} from '../../contexts/currentUserContext'
import useFetch from '../../hooks/useFetch'

const EditArticle = ({match}) => {
    const history = useHistory()
    const slug = match.params.slug
    const apiUrl = `/articles/${slug}`
    const [{response: fetchArticleResponse}, doFetchArticle] = useFetch(apiUrl)
    const [{response: updateArticleResponse, error: updateArticleError}, doUpdateArticle] = useFetch(apiUrl)
    const [initialValues, setInitialValues] = useState(null)
    const [currentUserState] = useContext(CurrentUserContext)
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false)

    const isAuthor = useCallback(() => {
        if (!fetchArticleResponse || !currentUserState.isLoggedIn) {
            return false
        }
        return currentUserState.currentUser.username === fetchArticleResponse.article.author.username
    },[currentUserState, fetchArticleResponse])

    const handleSubmit = (article) => {
        doUpdateArticle({
            method: 'put',
            data: {
                article
            }
        })
    }

    useEffect(() => {
        doFetchArticle()
    },[doFetchArticle])

    useEffect(() => {
        if (!fetchArticleResponse) {
            return
        }

        setInitialValues({
            title: fetchArticleResponse.article.title,
            description: fetchArticleResponse.article.description,
            body: fetchArticleResponse.article.body,
            tagList: fetchArticleResponse.article.tagList,
        })

    },[fetchArticleResponse])

    useEffect(() => {
        if (!updateArticleResponse) {
            return
        }
        setIsSuccessfulSubmit(true)
    },[updateArticleResponse])

    useEffect(() => {
        if (!fetchArticleResponse) {
            return
        }
        if (!isAuthor()) {
            history.push('/')
        }
    },[fetchArticleResponse, history, isAuthor])

    if (isSuccessfulSubmit) {
       return <Redirect to={`/article/${fetchArticleResponse.article.slug}`}/>
    }

    if (currentUserState.isLoggedIn === false) {
        return <Redirect to={'/'} />
    }

    return (
        <ArticleForm
            onSubmit={handleSubmit}
            errors={(updateArticleError && updateArticleError.errors) || {}}
            initialValues={initialValues}
        />
    )
}

export default EditArticle
