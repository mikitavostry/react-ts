import React, { useEffect, FC, useState } from 'react'
import List from './List'
import { IUser } from '../types/types'
import axios from 'axios'
import UserItem from './UserItem'
import { useNavigate } from 'react-router-dom'
const UserPage: FC = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
            return response
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List items={users} renderItem={(user: IUser) => <UserItem onClick={() => navigate(`/users/${user.id}`)} user={user} key={user.id} />} />
    )
}

export default UserPage