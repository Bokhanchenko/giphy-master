import React from 'react';

export default class Lifecycle extends React.Component {
  constructor(...args) {
    super(...args);

    console.log('constructor');

    this.state = {
      myStateVar: this.props.myPropsVar,
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);

    this.setState({ myStateVar: nextProps.myPropsVar })
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  render() {
    console.log('render');
    return <div>{ this.state.myStateVar }</div>
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('shouldComponentUpdate', prevProps, prevState);
  }
}