import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
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
    const {count, increment} = this.props;
    return(
      <div className="Counter">
        <p className="count">{count}</p>
        <div className="controls">
          <button onClick={increment}>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      dispatch(incrementValue()); 
    }
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
