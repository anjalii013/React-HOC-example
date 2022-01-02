import './App.css'
import SearchTodo from './TodoList'
import SearchUsers from './UserList'

function App() {
  return (
    <div className='App'>
      <h1>Higher Order Component</h1>
      <div className='section'>
        {/*<UserList />*/}
        <SearchUsers />
        {/*<TodoList />*/}
        <SearchTodo />
      </div>
    </div>
  )
}

export default App
