import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import { Grid, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    };

    YTSearch({key: process.env.REACT_APP_YOUTUBE_API_KEY, term: this.state.term}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0]});
    });
  }

  render() {
    return (
      <Grid>
        <Col sm={8}>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
        </Col>
        <VideoList
          videos={ this.state.videos }
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        />
      </Grid>
    );
  }
}

export default App;
