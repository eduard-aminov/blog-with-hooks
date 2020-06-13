import {stringify} from 'query-string'
import React, {Fragment, useEffect} from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import Feed from '../../components/Feed'
import Loading from '../../components/Loading'
import Paginator from '../../components/Paginator'
import useFetch from '../../hooks/useFetch'
import {getPaginator, limit} from '../../utils'

const UserArticles = ({location, isFavorites, username, url}) => {
    const {offset, currentPage} = getPaginator(location.search)
    const apiUrl = `/articles/?${stringify(isFavorites
        ? {limit, offset, favorited: username}
        : {limit, offset, author: username})}`
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        doFetch()
    }, [doFetch, isFavorites, username])

    return (
        <div>
            {isLoading && <Loading />}
            {error && <ErrorMessage />}
            {!isLoading && response && (
                <Fragment>
                    <Feed articles={response.articles}/>
                    <Paginator
                        total={response.articlesCount}
                        url={url}
                        limit={limit}
                        currentPage={currentPage}
                    />
                </Fragment>
            )}
        </div>
    )
}

export default UserArticles