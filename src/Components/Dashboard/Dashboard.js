import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor() {
    super();
    //moved from App.js
    this.state = {
      inventory: []
    };

    this.getInventory = this.getInventory.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  //moved from App.js
  componentDidMount() {
    axios.get(`/api/inventory`).then(response => {
      this.setState({
        inventory: response.data
      });
      console.log(response.data);
    });
  }

  removeProduct(id) {
    axios.delete(`/api/inventory/${id}`)
      this.getInventory();
  }

  //moved from App.js
  getInventory() {
    axios.get(`/api/inventory`).then(response => {
      this.setState({
        inventory: response.data
      });
    });
    console.log(this.state);
  }

  render() {
    let displayInventory = () => {
      return this.state.inventory.map( product => {
        let productImage = product.img
        ? product.img : "https://png.icons.com/ios/1600/no-camera.png";
        return (
          <div key={product.id}>
            <Product
              name={product.name}
              price={product.price}
              img={productImage}
            />

            <button onClick={() => this.removeProduct(product.id)}>
              Delete
            </button>

            <Link to={`/edit/${product.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        );
      });
    };
    return (
      <div>
        <p>Dashboard</p>

        {displayInventory()}
      </div>
    );
  }
}
