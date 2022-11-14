import React from 'react'
import { useDispatch } from 'react-redux'
import Card from './Card'
import { deleteItem, changeDone } from '../actions/listActions'

function DoneImg(props) {

    if (props.done) {
        return (<p>✅</p>)
    } else {
        return (<p>❗</p>)
    }

}

function ListItem(props) {

    const dispatch = useDispatch()

    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => { dispatch(deleteItem(props.item.id)) }}>❌</button>
                </div>
            </Card>
        </li>

    )

}

export default ListItem