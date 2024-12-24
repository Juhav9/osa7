import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/user'
import { setNotification } from '../reducers/notification'
import loginService from '../services/login'
import storage from '../services/storage'
import Notification from '../components/Notification'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password })
            dispatch(setUser(user))
            storage.saveUser(user)
            dispatch(setNotification(`welcome back ${user.name}`))
        } catch {
            const message = 'wrong password or username'
            const type = 'error'
            dispatch(setNotification(message, type))
        }
        setUsername('')
        setPassword('')
    }
    return (
        <div>
            <Notification />
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        data-testid="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        data-testid="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login
