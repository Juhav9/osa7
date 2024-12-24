import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewBlog } from '../reducers/blogs'
import { setNotification } from '../reducers/notification'
import { Form, Button } from 'react-bootstrap'

const NewBlog = ({ doCreate }) => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch()

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addNewBlog({ title, author, url }))
        dispatch(setNotification(`Blog created: ${title}, ${author}`))
        doCreate()
        setAuthor('')
        setTitle('')
        setUrl('')
    }

    return (
        <div>
            <h2>Create a New Blog</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        data-testid="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>URL</Form.Label>
                    <Form.Control
                        type="text"
                        data-testid="url"
                        value={url}
                        onChange={handleUrlChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        data-testid="author"
                        value={author}
                        onChange={handleAuthorChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    create
                </Button>
            </Form>
            <br />
        </div>
    )
}

export default NewBlog
