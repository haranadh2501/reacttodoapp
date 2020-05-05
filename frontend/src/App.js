import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './module/Form';
import List from './module/List';
import Edit from './module/Edit';

function App() {

  return (
    <Router>
      <div className="App">
          <div className=" justify-content-center">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <h2 className="text-capitalize text-center">  ToDo List </h2>
                 <Link className="btn btn-lg btn-block bg-info "  to="/form">Add Task</Link>
              </li>
            </ul>

          </div>

        <div className="container py-4">
          <div className="row">
          <Route path="/" exact component={List} />
          <Route path="/form" component={Form} />
          <Route path="/edit/:Id" component={Edit} />
          </div>
        </div>

      </div>
</Router>
  );
}

export default App;
