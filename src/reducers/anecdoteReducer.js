import anecdoteService from '../services/anecdotes'
/*
const getId = () => (100000 * Math.random()).toFixed(0)


const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
}
*/
// const initialState = anecdotesAtStart.map(asObject)
// const reducer = (state = initialState, action) => {
const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const changedAnecdote = action.data.changedAnecdote
      /*
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }

      // täällä tää toimis?
      anecdoteService.update(id, changedAnecdote)
*/
      return state
        .map(anecdote =>
          anecdote.id !== id ? anecdote : changedAnecdote)
        .sort((firstItem, secondItem) => secondItem.votes - firstItem.votes)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}
export const voteAnectode = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdoteToChange = anecdotes.find(a => a.id === id)
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1
    }

    await anecdoteService.update(id, changedAnecdote)

    dispatch({
      type: 'VOTE',
      data: { changedAnecdote, id }
    })
  }
}

/* Vanha:
export const voteAnectode = (id) => {
  console.log('vote', id)
  return {
    type: 'VOTE',
    data: { id }
  }
}
*/
export default reducer