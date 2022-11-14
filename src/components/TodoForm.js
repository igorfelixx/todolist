import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addItem} from '../actions/listActions'

function TodoForm (props) {

    const [text, setText] = useState("")
    const dispatch = useDispatch()

    function handleChange (event) {
        let t = event.target.value
        setText(t)
    }

    function addItemEvent (event) {
        event.preventDefault()
        if(text){
        dispatch(addItem(text))
        setText('')
        props.onHideModal()
        }
    }

    return(
            <from>
                <input onChange={handleChange} type="text"></input>
                <button onClick={addItemEvent}>Add</button>
            </from>
    )
    
}

export default TodoForm