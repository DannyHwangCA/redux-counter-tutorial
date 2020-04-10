import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div className="Counter">
        <p className="count">0</p>
        <div className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

export default App;