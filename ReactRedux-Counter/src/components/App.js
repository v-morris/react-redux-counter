import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputTextChanged, inputTextComplete } from '../actions/index';

class App extends React.Component {

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={this.props.count}
          clicks={this.props.clicks}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onInputTextChange={this.props.onInputTextChange}
          inputText={this.props.inputText}
          onInputTextComplete={this.props.onInputTextComplete} />
      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputTextChange: (text) => dispatch(inputTextChanged(text)),
    onInputTextComplete: (inputVal) => dispatch(inputTextComplete(inputVal))


  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    clicks: state.clicks,
    textInputted: state.textInputted,
    inputVal: state.inputVal
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);