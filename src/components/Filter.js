import React from 'react'
import { filterChange } from '../reducers/filterReducer'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'

//const Filter = () => {
const Filter = (props) => {
    //    const dispatch = useDispatch()

    const handleChange = (event) => {
        // input-kentän arvo muuttujassa event.target.value
        event.preventDefault()
        const input = event.target.value
        //dispatch(filterChange(input))
        props.filterChange(input)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    filterChange
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default ConnectedFilter
//export default Filter