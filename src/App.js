import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Inventory</Link>

        <Router>
          <Switch>
            <Route exact path="/" render={() => <Dashboard />} />

            <Route
              path="/edit/:id"
              render={historyProps => {
                return <Form {...historyProps} />;
              }}
            />

            <Route
              path="/add"
              render={historyProps => <Form {...historyProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

{
  /* <Route exact path="/" component={Dashboard} />
  // <Route path="/edit/:id" component={Form} />
  // <Route path="/add" component={Form} /> */
}

// constructor() {
//   super();

//   // this.state = {
//   //   inventory: []
//   // };
// }

// componentDidMount(){
//   axios.get(`/api/inventory`).then( response =>{
//     this.setState({
//       inventory: response.data
//     });
//     console.log(response.data);
//   })
// }

// getInventory(){
//   axios.get(`/api/inventory`).then(response => {
//     this.setState({
//       inventory: response.data
//     })
//   })
// }
