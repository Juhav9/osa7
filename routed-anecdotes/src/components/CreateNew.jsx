import { useState } from 'react'
import { useField } from '../hooks'

const CreateNew = (props) => {
  /*
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')
  */
    const {reset: resetContent, ...content} = useField('content')
    const {reset: resetAuthor, ...author} = useField('author')
    const {reset: resetInfo, ...info} = useField('info')

    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
    }
    const reset = () => {
      resetContent(),
      resetAuthor(),
      resetInfo()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content} />
          </div>
          <div>
            author
            <input {...author} />
          </div>
          <div>
            url for more info
            <input {...info} />
          </div>
          <button type='submit'>create</button>
          <button type='button' onClick={reset}>reset</button>
        </form>
      </div>
    )
  
  }

  export default CreateNew