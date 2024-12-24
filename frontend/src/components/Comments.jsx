import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentBlog } from '../reducers/blogs'
import { Form, Button, ListGroup } from 'react-bootstrap'

const Comments = ({ blog }) => {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const handleComment = async (event) => {
        event.preventDefault()
        const commentedBlog = {
            ...blog,
            comments: blog.comments.concat(comment),
        }
        dispatch(commentBlog(commentedBlog))
        setComment('')
    }

    return (
        <div>
            <h2>Comment</h2>
            <Form onSubmit={handleComment}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    add comment
                </Button>
            </Form>
            <br />
            <h3>Comments</h3>
            <ListGroup as="ul">
                {blog.comments.map((comment, index) => (
                    <ListGroup.Item as="li" key={index}>
                        {comment}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default Comments
