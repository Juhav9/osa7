import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import userService from '../services/users'
import { Table } from 'react-bootstrap'

const UserTabel = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getUsersAndBlogs().then((res) => {
            setUsers(res)
        })
    }, [])
    if (!users) {
        return <h2>hello</h2>
    }
    return (
        <Table striped>
            <tbody>
                <tr>
                    <th></th>
                    <th>blogs created</th>
                </tr>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </td>
                        <td>{user.blogs.length}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default UserTabel
