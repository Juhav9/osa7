import { createRef } from 'react'
import Togglable from '../components/Togglable'
import BlogList from '../components/BlogList'
import NewBlog from '../components/NewBlog'
import Notification from '../components/Notification'

const Home = () => {
    const blogFormRef = createRef()

    const handleCreate = async () => {
        blogFormRef.current.toggleVisibility()
    }
    return (
        <div>
            <Notification />
            <Togglable buttonLabel="create new blog" ref={blogFormRef}>
                <NewBlog doCreate={handleCreate} />
            </Togglable>
            <BlogList />
        </div>
    )
}

export default Home
