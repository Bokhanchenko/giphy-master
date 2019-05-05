import React from 'react';
import Lifecycle from './lifecycle-logger';
import styles from './lifecycle.module.css';

export default class LifecycleForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      currentNumber: 0,
    }
  }

  update() {
    this.setState(({ currentNumber }) => ({
      currentNumber: currentNumber + 1,
    }))
  }

  render() {
    return (
      <div className={styles.container}>
        <button onClick={() => this.update()}>Update</button>
        <Lifecycle myPropsVar={this.state.currentNumber} />
      </div>
    )
  }
}
