import axios from 'axios'
import storage from './storage'

const baseUrl = '/api/blogs'

const getConfit = () => ({
    headers: { Authorization: `Bearer ${storage.loadUser().token}` },
})

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const update = async (id, newObject) => {
    const request = await axios.put(`${baseUrl}/${id}`, newObject, getConfit())
    return request.data
}

const create = async (newObject) => {
    const response = await axios.post(baseUrl, newObject, getConfit())
    return response.data
}

const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`, getConfit())
    return response.data
}

const addComment = async (blog) => {
    const response = await axios.post(`${baseUrl}/${blog.id}/comments`, blog)
    return response.data
}

export default { getAll, create, update, remove, addComment }
