import React, { Component } from 'react';
import './style.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      env: this.getEnv(this.props.location.pathname),
      urlRoot: 'http://www.backend-endpoint.com/'
    }

    this.makeAjaxCall();
  }

  // Listen for props being changed (in our case when react router updates the props that have the location information)
  componentWillReceiveProps(nextProps) {
    const currentPathname = this.props.location.pathname;
    const nextPathname = nextProps.location.pathname;

    if (currentPathname !== nextPathname) {
      this.setState({
        ...this.state,
        env: this.getEnv(nextPathname)
      });

      this.makeAjaxCall(this.getEnv(nextPathname));
    }
  }

  getEnv(pathname) {
    return pathname.substr(1);
  }

  makeAjaxCall(environment = this.state.env) {
    console.log(`Calling the endpoint using the new environment ${environment}`);
  }

  render() {
    return (
      <div>
        <h1>The current environment is {this.state.env}</h1>
      </div>
    );
  }
}