import React, { Component } from "react";
import "./App.css";

import Layout from "./Componets/Layout";
import Header from "./Componets/Header";
import Container from "./Componets/Container";
import Card from "./Componets/Card";

class App extends Component {
  render() {
    return (
      <Layout>
        <Header title="Baby Hippo Gram" />
        <Container>
          <h1 className="text-center">Hello world, I am Hippo.</h1>
          {(this.state.loaded ? (
             <Card cards={this.state.cards} />
          ) : (
            <h2 className="text-center">Loading...</h2>
          ))}
         
        </Container>
      </Layout>
    );
  }

  state = {
    loaded: false,
    cards: [],
  };

  componentDidMount() {
    fetch("https://www.reddit.com/r/babyhippos/hot/.json?count=20")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ loaded: !this.state.loaded, cards: data.data.children });
      })
      .catch(console.log);
  }
}

export default App;
