import React, { Component } from "react";
import Counter from "./Counter";
import { connect } from "react-redux";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
  }
  regenrateCounters = () => {
    this.props.dispatch({
      type: "COUNTERARR",
      payload: {counter: this.refs.countInput.value}
    })
  };

  counterUpdateCallback = changedNum => {
    this.props.dispatch({ 
      type: "COUNTERSUM",
      payload: changedNum
    }); 
  };

  increaseNumber = (changedNum, id) => {
    this.props.dispatch({
      type: "INCREASENUM",
      payload: {counterArr: this.props.counterArr, changedNum: changedNum, id: id}
    })
  };

  decreaseNumber = (changedNum, id) => {
    this.props.dispatch({
      type: "DECREASENUM",
      payload: {counterArr: this.props.counterArr, changedNum: changedNum, id: id}
    })
  };

  render() {
    return (
      <div>
        {this.props.counterArr.map(counterItem => (
          <Counter
            key={counterItem.id}
            id={counterItem.id}
            countValue={counterItem.count}
            onCounterValueChanged={this.counterUpdateCallback}
            onClickIncreased={this.increaseNumber}
            onClickDecreased={this.decreaseNumber}
          />
        ))}
        <input type="text" ref="countInput" />
        <button onClick={this.regenrateCounters}>
          Regenerate indicated Counters
        </button>
        <br />
        <span>总和：{this.props.counterSum}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counterSum: state.counterSum,
  counterArr: state.counterArr
}); 
connect(mapStateToProps)(CounterGroup)

export default connect(mapStateToProps)(CounterGroup);
