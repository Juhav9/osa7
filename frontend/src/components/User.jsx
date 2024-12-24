import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
const User = () => {
    const id = useParams().id
    const blogs = useSelector(({ blogs }) => blogs)
    const user = blogs.find((b) => b.user.id === id)
    if (!user) {
        return <h4>Not found</h4>
    }

    const tempBlogs = blogs.filter((b) => {
        if (b.user.id === id) {
            return b
        }
    })
    const userBlogs = tempBlogs.map((b) => {
        const { u, ...ret } = b
        return ret
    })
    const userObj = { ...user.user, blogs: [...userBlogs] }

    return (
        <div>
            <h2>{userObj.name}</h2>
            <h3>added blogs</h3>
            <ListGroup>
                {userObj.blogs.map((b) => (
                    <ListGroup.Item key={b.id}>{b.title}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default User
