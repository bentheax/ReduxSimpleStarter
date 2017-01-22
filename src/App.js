import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: process.env.REACT_APP_YOUTUBE_API_KEY}, (videos) => {
      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <SearchBar />
    );
  }
}

export default App;
