import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
  render() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/login">Login</Link>
        </div>
    )
  }
}
