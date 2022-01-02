import React from 'react'

function HOC(WrappedComponent, entity) {
  return class extends React.Component {
    state = {
      data: [],
      term: '',
    }
    componentDidMount() {
      const fectDate = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        )
        const json = await res.json()
        this.setState({ ...this.state, data: json })
        console.log(json)
      }
      fectDate()
    }
    render() {
      let { data, term } = this.state
      let filteredDate = data.slice(0, 10).filter((d) => {
        if (entity === 'users') {
          const { name } = d
          return name.indexOf(term) >= 0
        }
        if (entity === 'todos') {
          const { title } = d
          return title.indexOf(term) >= 0
        }
      })

      return (
        <div>
          <h2 style={{ color: 'red' }}>
            {entity[0].toUpperCase() + entity.slice(1)} :
          </h2>
          <input
            type='text'
            value={term}
            onChange={(e) => {
              this.setState({ ...this.state, term: e.target.value })
            }}
          ></input>
          <WrappedComponent data={filteredDate}></WrappedComponent>
        </div>
      )
    }
  }
}

export default HOC
