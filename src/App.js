import React, { Component } from "react";
import axios from 'axios';

//components
import Form from "./components/Form";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";

import Header from "./components/Header";
import Banner from "./components/Banner";


import "./App.css";

const API_KEY = "8f547e134d4f4ff24b8f4ef8261576e3";
class App extends Component {

   state = {
    recipes: []
  }

  getRecipe = async (e) => {
    e.preventDefault();
    let recipeName = e.target.elements.recipeName.value;
    let api_call = `https://www.food2fork.com/api/search?&key=${API_KEY}&q=${recipeName}&count=3`;
    let response = await axios(api_call);
    let recipes_list = response.data.recipes;
    this.setState({recipes:recipes_list});
    console.log("this.state", this.state.recipes ,typeof(this.state.recipes));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Banner/>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes_list={this.state.recipes}/>
        <Footer />
      </div>
    );
  }
}

export default App;