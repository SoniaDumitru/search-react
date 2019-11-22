import React from 'react';

class App extends React.Component{
constructor() {
  super()
  this.state = {
    names: ['sonia', 'diana', 'lili'],
    searchName: ''
  }
}

handleFilter(event) {
  this.setState({
    searchName: event.target.value
  })
}

render() {
    return (
      <div>
      <SearchBar handleFilter={(event) => this.handleFilter(event)}/>
      <ul>{this.state.names
        .filter(name => name.toLowerCase().
        includes(this.state.searchName.toLowerCase())).map(name => <li>{name}</li>)}</ul>
      </div>
    );
  }
}


function SearchBar(props) {
  return(
    <input type="text" onChange={props.handleFilter}></input>
  )
}

export default App;
