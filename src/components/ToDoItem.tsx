import React, { FC } from 'react'
import { IToDo } from '../types/types'

interface ToDoItemProps {
    todo: IToDo
}

const ToDoItem: FC<ToDoItemProps> = ({ todo }) => {
    return (
        <div>
            <div>
                <input type='checkbox' checked={todo.completed} />
                {todo.id}. {todo.title}
            </div>
        </div>
    )
}

export default ToDoItem