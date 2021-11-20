const initialState = null

const notificationReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}

let previous

export const setNotification = (notification, time) => {
    //Korjaus tapahtuu siten, että uuden notifikaation 
    //tullessa edellisen notifikaation nollaus tarvittaessa perutaan
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            notification
        })

        const timeoutID = setTimeout(() => {
            dispatch(clearNotification())
        }, time)

        //vissiin toimii, mut huonosti (notifikaatio)
        if (previous !== timeoutID && previous !== undefined) {
            clearTimeout(previous)
        }
        previous = timeoutID
    }
}
const clearNotification = () => {
    return {
        type: 'SET_NOTIFICATION',
        notification: null
    }
}

export default notificationReducer
