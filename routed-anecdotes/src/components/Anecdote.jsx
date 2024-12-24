import { useParams } from "react-router-dom"

const Anecdote = ({anecdotes}) => {
    const id = useParams().id
    const anecdote = anecdotes.find(a=>a.id===Number(id))
    console.log(anecdote)

    return(
        <div>
            <h2>{anecdote.content}</h2>
            <div>has {anecdote.votes} votes</div>
            <br />
            <div>for more info see  
                <a href={anecdote.info}> {anecdote.info}</a>
            </div>
            <br />
        </div>
    )
}

export default Anecdote