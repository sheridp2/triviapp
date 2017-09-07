import React from 'react'
import Counter from '../counter'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello this is the game page</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Dashboard;
