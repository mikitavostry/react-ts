import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import TodosPage from './components/TodosPage'
import UserPage from './components/UserPage'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='todos'>Todos</NavLink>
        </div>
        <Routes>
          <Route path='/users' element={<UserPage />}></Route>
          <Route path='/todos' element={<TodosPage />}></Route>
          <Route path='/users/:id' element={<UserItemPage />}></Route>
          <Route path='/todo/:id' element={<TodoItemPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App