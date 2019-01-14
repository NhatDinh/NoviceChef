import React, { Component } from "react";
//components
import Form from "./components/Form";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import "./App.css";

const API_KEY = "TOP-SECRET-STUFF";

class App extends Component {
   state = {
    recipes: []
  }

  getRecipe = async (e) => {
    e.preventDefault();
    let recipeName = e.target.elements.recipeName.value;
    this.state.recipes.push(recipeName);
    console.log(this.state.recipes)
    //const api_call = await fetch(`https://afternoon-cliffs-70683.herokuapp.com//http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    //const data = await api_call.json();
    //console.log(data);
    //this.setState({ recipes: data.recipes });
    //console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Novice Chef <i className="fas fa-fire"></i></h1>
        </header>
        <Banner/>
        <Form getRecipe={this.getRecipe} />
        <Footer />
      </div>
    );
  }
}

export default App;