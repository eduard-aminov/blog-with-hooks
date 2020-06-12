import React, {useEffect, useState} from 'react'
import BackendErrorMessages from './BackendErrorMessages'

const ArticleForm = ({onSubmit, errors, initialValues}) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [description, setDescription] = useState('')
    const [tagList, setTagList] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const article = {
            title,
            body,
            description,
            tagList
        }
        onSubmit(article)
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeBody = (e) => {
        setBody(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleChangeTagList = (e) => {
        setTagList(e.target.value)
    }

    useEffect(() => {
        if (!initialValues) {
            return
        }
        setTitle(initialValues.title)
        setDescription(initialValues.description)
        setBody(initialValues.body)
        setTagList(initialValues.tagList.join(' '))
    },[initialValues])

    return (
        <div className="editor-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        {errors && <BackendErrorMessages backendMessages={errors}/>}
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className='form-control form-control-lg'
                                        placeholder='Article title'
                                        value={title}
                                        onChange={handleChangeTitle}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className='form-control form-control-lg'
                                        placeholder='What is this article about?'
                                        value={description}
                                        onChange={handleChangeDescription}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        type="text"
                                        className='form-control'
                                        rows='8'
                                        placeholder='Write your article'
                                        value={body}
                                        onChange={handleChangeBody}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className='form-control form-control-lg'
                                        placeholder='Enter tags'
                                        value={tagList}
                                        onChange={handleChangeTagList}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <button
                                        type='submit'
                                        className='btn btn-lg btn-primary pull-xs-right'
                                    >
                                        Publish article
                                    </button>
                                </fieldset>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleForm