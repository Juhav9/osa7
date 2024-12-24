import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

const Notification = () => {
    const notification = useSelector(({ notifications }) => notifications)
    if (!notification) {
        return null
    }

    const { message, type } = notification

    const style = {
        backgroundColor: 'lightgrey',
        margin: '10px',
        padding: '10px',
        border: '2px solid',
        borderColor: type === 'success' ? 'green' : 'red',
        borderRadius: '5px',
    }
    if (type === 'error') {
        return <Alert variant="warning">{message}</Alert>
    }
    return <Alert variant="success">{message}</Alert>
}

export default Notification
