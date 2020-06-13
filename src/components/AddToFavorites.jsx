import React from 'react'
import useFetch from '../hooks/useFetch'
import classNames from 'classnames'

const AddToFavorites = ({isFavorited, favoritesCount, slug}) => {
    const apiUrl = `/articles/${slug}/favorite`
    const [{response}, doFetch] = useFetch(apiUrl)
    const isFavoritedWithResponse = response
        ? response.article.favorited
        : isFavorited
    const favoritesCountWithResponse = response
        ? response.article.favoritesCount
        : favoritesCount

    const handleLike = (e) => {
        e.preventDefault()
        doFetch({
            method: isFavoritedWithResponse ? 'delete' : 'post',
        })
    }

    const buttonClasses = classNames({
        'btn': true,
        'btn-sm': true,
        'btn-primary': isFavoritedWithResponse,
        'btn-outline-primary': !isFavoritedWithResponse
    })

    return (
        <button
            className={buttonClasses}
            onClick={handleLike}
        >
            <i className='ion-heart'></i>
            <span>&nbsp; {favoritesCountWithResponse}</span>
        </button>
    )
}
export default AddToFavorites