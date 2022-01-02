import React, { useState, useEffect } from 'react'
import HOC from './HOC'

function TodoList({ data }) {
  //   const [todos, setTodos] = useState([])
  //   const [term, setTerm] = useState('')

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  //       const json = await res.json()
  //       setTodos(json)
  //       console.log(json)
  //     }
  //     fetchUsers()
  //   }, [])

  const renderList = data.slice(0, 10).map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    )
  })

  //   let filteredTodos = todos
  //     .slice(0, 10)
  //     .filter(({ title }) => {
  //       return title.indexOf(term) >= 0
  //     })
  //     .map((todo) => {
  //       return (
  //         <div key={todo.userId}>
  //           <p>
  //             <strong>{todo.title}</strong>
  //           </p>
  //         </div>
  //       )
  //     })

  return (
    <div>
      {/* <h2 style={{ color: 'blue' }}>Todos: </h2>
      <input
        type='text'
        value={term}
        onChange={(e) => {
          setTerm(e.target.value)
        }}
    ></input>*/}
      <div>{renderList}</div>
    </div>
  )
}

const SearchTodo = HOC(TodoList, 'todos')

export default SearchTodo
