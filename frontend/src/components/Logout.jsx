import { useDispatch, useSelector } from 'react-redux'
import storage from '../services/storage'
import { setNotification } from '../reducers/notification'
import { setUser } from '../reducers/user'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Logout = () => {
    const user = useSelector(({ user }) => user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const style = {
        marginLeft: '10px',
    }
    const handleLogout = () => {
        dispatch(setUser(null))
        storage.removeUser()
        dispatch(setNotification(`Bye, ${user.name}!`))
        navigate('/')
    }
    if (!user) {
        return null
    }
    return (
        <div>
            <Button onClick={handleLogout}>logout</Button>
            <span style={style}>{user.name} logged in</span>
        </div>
    )
}

export default Logout
