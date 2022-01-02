import React, { useState, useEffect } from 'react'
import HOC from './HOC'

function UserList({ data }) {
  // Added in HOC component
  //   const [users, setUsers] = useState([])
  //   const [term, setTerm] = useState('')

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //       const json = await res.json()
  //       setUsers(json)
  //       console.log(json)
  //     }
  //     fetchUsers()
  //   }, [])

  const renderList = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    )
  })

  //   let filteredUsers = users
  //     .filter(({ name }) => {
  //       return name.indexOf(term) >= 0
  //     })
  //     .map((user) => {
  //       return (
  //         <div key={user.id}>
  //           <p>
  //             <strong>{user.name}</strong>
  //           </p>
  //         </div>
  //       )
  //     })

  return (
    <div>
      {/* <h2 style={{ color: 'red' }}>Users: </h2>
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

const SearchUsers = HOC(UserList, 'users')

export default SearchUsers
