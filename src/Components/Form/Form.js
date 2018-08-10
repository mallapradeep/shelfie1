import React, { Component } from "react";
import axios from "axios";
import { Link, Router } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
      imageUrl: "",
      currentProductId: null
    };
    
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputPrice = this.handleInputPrice.bind(this);
    this.handleInputImage = this.handleInputImage.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }
  
  getProduct(id) {
    axios.get(`/api/inventory/${id}`).then(response => {
      this.handleInputName(response.data[0].name);
      this.handleInputPrice(response.data[0].price);
      this.handleInputImage(response.data[0].img);
      this.setState({
        currentProductId: response.data[0].id
      });
    });
  }
  componentDidMount() {
    this.getProduct(this.props.match.params.id);
  }
  
  handleInputName(val) {
    this.setState({
      name: val
    });
  }
  handleInputPrice(val) {
    this.setState({
      price: val
    });
  }
  handleInputImage(val) {
    this.setState({
      imageUrl: val
    });
  }
  handleReset() {
    this.setState({
      name: "",
      price: 0,
      imageUrl: ""
    });
  }

  createProduct() {
    let { name, price, imageUrl } = this.state;
    let productToAdd = {
      name: name,
      price: price,
      imageUrl: imageUrl
    };
    axios.post(`/api/product`, productToAdd).then(response => {
      this.setState({
        inventory: response.data
      });
    });
  }

  updateProduct() {
    let updatedProduct = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.imgUrl
    };
    axios.put(`/api/product/${this.state.currentProductId}`, updatedProduct);
  }

  //get endpoint that returns a single product

  render() {
    return (
      <div>
        <p>Form</p>
        <span>IMAGE BOX</span>
        <p>Product Name:</p>
        <input
          type="text"
          onChange={e => this.handleInputName(e.target.value)}
          value={this.state.name}
        />

        <p>Price: </p>
        <input
          type="text"
          onChange={e => this.handleInputPrice(e.target.value)}
          value={this.state.price}
        />

        <p>Image URL :</p>
        <input
          type="text"
          onChange={e => this.handleInputImage(e.target.value)}
          value={this.state.imageUrl}
        />

        <button onClick={() => this.handleReset()}>Cancel</button>
        
          {this.state.currentProductId ? (
            <Link to="/">
              {" "}
              <button onClick={() => this.updateProduct()}>
                Save Changes
              </button>{" "}
            </Link>
          ) : (
            <button onClick={() => this.createProduct()}>
              Add to Inventory
            </button>
          )}
       
      </div>
    );
  }
}
