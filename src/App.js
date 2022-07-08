import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet className="App-header">
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@nytimes" />
          <meta name="twitter:creator" content="@SarahMaslinNir" />
          <meta name="twitter:title" content="Cards test" />
          <meta name="twitter:description" content="Quick media card test" />
          <meta
            name="twitter:image"
            content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"
          />

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </Helmet>
      </div>
    );
  }
}

export default App;
