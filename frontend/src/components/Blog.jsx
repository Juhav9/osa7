import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeBlogs, likeBlog } from '../reducers/blogs'
import { setNotification } from '../reducers/notification'
import Notification from '../components/Notification'
import Comments from './Comments'
import { Button, Card, ListGroup } from 'react-bootstrap'

const Blog = () => {
    const id = useParams().id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeBlogs())
    }, [])
    const blogs = useSelector(({ blogs }) => blogs)
    const blog = blogs.find((b) => b.id === id)

    const handleVote = async (blog) => {
        dispatch(likeBlog({ ...blog, likes: blog.likes + 1 }))
        dispatch(setNotification(`You liked ${blog.title} by ${blog.author}`))
    }

    if (!blog) {
        return null
    }
    return (
        <div>
            <Notification />
            <Card>
                <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                </Card.Body>
                <ListGroup>
                    <ListGroup.Item>{blog.url}</ListGroup.Item>
                    <ListGroup.Item>added by {blog.user.name}</ListGroup.Item>
                    <ListGroup.Item>{blog.likes} likes </ListGroup.Item>
                </ListGroup>
                <Button onClick={() => handleVote(blog)}>like</Button>
            </Card>
            <br />

            <Comments blog={blog} />
        </div>
    )
}

export default Blog
