import React, { Component } from "react";

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
    render() {
      const gifs = [
        { id: "xvhkuAxYLav60x50oF" },
        { id: "02muhNyezC8QcuWhFX" }
      ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="xvhkuAxYLav60x50oF" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
        .red
      </div>
    );
  }
}

export default App;
