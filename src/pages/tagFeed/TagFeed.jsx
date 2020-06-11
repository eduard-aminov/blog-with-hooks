import React, {Fragment, useEffect} from 'react'
import ErrorMessage from '../../components/ErrorMessage'
import Feed from '../../components/Feed'
import FeedToggle from '../../components/FeedToggle'
import Loading from '../../components/Loading'
import Paginator from '../../components/Paginator'
import PopularTags from '../../components/PopularTags'
import useFetch from '../../hooks/useFetch'
import {getPaginator, limit} from '../../utils'
import {stringify} from 'query-string'

const TagFeed = ({location, match}) => {
    const {currentPage, offset} = getPaginator(location.search)
    const tag = match.params.slug
    const stringifiedParams = stringify({
        limit,
        offset,
        tag
    })
    const url = match.url
    const apiUrl = `/articles?${stringifiedParams}`
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        doFetch()
    },[doFetch, currentPage, tag])

    return (
        <div className='home-page'>
            <div className="banner">
                <div className="container">
                    <h1> Medium Clone</h1>
                    <p>A place to share knowledge</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <FeedToggle tag={tag}/>
                        {isLoading && <Loading/>}
                        {error && <ErrorMessage/>}
                        {!isLoading && response && (
                            <Fragment>
                                <Feed articles={response.articles}/>
                                <Paginator
                                    total={response.articlesCount}
                                    limit={limit}
                                    url={url}
                                    currentPage={currentPage}
                                />
                            </Fragment>
                        )}
                    </div>
                    <div className="col-md-3">
                        <PopularTags/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagFeed