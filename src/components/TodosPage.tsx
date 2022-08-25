import React, { useEffect, FC, useState } from 'react'
import { IToDo } from '../types/types'
import List from './List'
import axios from 'axios'
import ToDoItem from './ToDoItem'

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<IToDo[]>([])
    useEffect(() => {
        fetchToDos()
    }, [])

    async function fetchToDos() {
        try {
            const response = await axios.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos')
            setTodos(response.data)
            return response
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List items={todos} renderItem={(todo: IToDo) => <ToDoItem todo={todo} key={todo.id} />} />
    )
}

export default TodosPage