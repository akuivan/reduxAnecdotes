import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnectode } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const dispatch = useDispatch()
    let anecdotes = useSelector(state => state.anecdotes)

    const vote = (id, content) => {
        dispatch(voteAnectode(id))
        dispatch(setNotification(`you voted '${content}'`, 5000))
    }

    const filter = useSelector(state => state.filter)
    // apply filter if there is one
    if (filter !== '') {
        anecdotes = anecdotes
            .filter(a => a.content.toLowerCase().includes(filter))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AnecdoteList