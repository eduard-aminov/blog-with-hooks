import React, {useContext, useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import ArticleForm from '../../components/ArticleForm'
import {CurrentUserContext} from '../../contexts/currentUserContext'
import useFetch from '../../hooks/useFetch'

const CreateArticle = () => {
    const initialValues = {
        title: '',
        description: '',
        body: '',
        tagList: []
    }
    const apiUrl = '/articles'
    const [{response, error}, doFetch] = useFetch(apiUrl)
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false)
    const [currentUserState] = useContext(CurrentUserContext)

    const handleSubmit = (article) => {
        doFetch({
            method: 'post',
            data: {
                article
            }
        })
    }

    useEffect(() => {
        if (!response) {
            return
        }

        setIsSuccessfulSubmit(true)
    },[response])

    if (isSuccessfulSubmit) {
       return <Redirect to={`/article/${response.article.slug}`}/>
    }

    if (!currentUserState.isLoggedIn) {
        return <Redirect to={'/'} />
    }

    return (
        <ArticleForm
            onSubmit={handleSubmit}
            errors={(error && error.errors) || {}}
            initialValues={initialValues}
        />
    )
}

export default CreateArticle