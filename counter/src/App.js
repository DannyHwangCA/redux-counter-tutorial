import React from 'react';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {
  count: 0,
}

const INCREMENT = 'increment';

const incrementValue = () => ({
  type: INCREMENT,
});

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    }
  }
  return state;
}

const store = createStore(reducer);

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