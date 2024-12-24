import { useEffect } from 'react'
import { initializeBlogs, removeBlog } from '../reducers/blogs'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notification'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const BlogList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeBlogs())
    }, [])

    const byLikes = (a, b) => b.likes - a.likes
    const blogs = useSelector(({ blogs }) => blogs).slice()

    const handleDelete = async (blog) => {
        if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
            dispatch(removeBlog(blog.id))
            dispatch(
                setNotification(
                    `Blog ${blog.title}, by ${blog.author} removed`,
                ),
            )
        }
    }

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        marginBottom: 5,
    }

    return (
        <div>
            <Table striped>
                <tbody>
                    {blogs.sort(byLikes).map((blog) => (
                        <tr key={blog.id}>
                            <td>
                                <Link to={`/blogs/${blog.id}`}>
                                    {blog.title}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default BlogList
