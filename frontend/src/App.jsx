import Login from './components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { initializeUser } from './reducers/user'
import { initializeBlogs } from './reducers/blogs'
import Users from './components/Users'
import Home from './components/Home'
import User from './components/User'
import Blog from './components/Blog'
import Navigation from './components/Navigation'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeUser())
        dispatch(initializeBlogs())
    }, [])

    const user = useSelector(({ user }) => user)

    return (
        <div className="container">
            {user && <Navigation />}
            <h1>Blogs</h1>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Login />} />
                <Route path="/users" element={user ? <Users /> : <Login />} />
                <Route
                    path="/users/:id"
                    element={user ? <User /> : <Login />}
                />
                <Route
                    path="/blogs/:id"
                    element={user ? <Blog /> : <Login />}
                />
            </Routes>
        </div>
    )
}

export default App
