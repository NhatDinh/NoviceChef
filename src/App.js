import React, { Component } from "react";

//components
import Form from "./components/Form";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Banner from "./components/Banner";

import "./App.css";

class App extends Component {
  getRecipe = async e => {
    e.preventDefault();
    let recipeName = e.target.elements.recipeName.value;
    this.props.history.push({
      pathname: `/recipes/?search=${recipeName}`,
      recipeTitle: recipeName
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Form getRecipe={this.getRecipe} />
        <Footer />
      </div>
    );
  }
}

export default App;