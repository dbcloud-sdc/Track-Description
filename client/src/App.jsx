import React from 'react';
import ArtistWidget from './components/ArtistWidget';
import SongDetailWidget from './components/songDetailWidget';
import artistData from './data/artistData';
import songData from './data/songData';

import Styled from './appContainerStyle';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsTruncated: true,
      artistData: artistData[13],
      artists: artistData,
      songData: songData[13],
    };
    this.toggleTruncate = this.toggleTruncate.bind(this);
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(`/api/song/${this.props.song_id}`).then(response => response.json())
    .then((data) => {
      this.setState({
        songData: data.song,
        artistData: data.artist
      });
      return data;
    });
  }

  toggleTruncate() {
    const { detailsTruncated } = this.state;
    this.setState({
      detailsTruncated: !detailsTruncated,
    });
  }

  render() {
    const {artistData, songData, detailsTruncated} = this.state;

    return (
      <Styled>
        <ArtistWidget artistData={artistData} />
        <SongDetailWidget artistData={artistData} songData={songData} truncated={detailsTruncated} toggleTruncate={this.toggleTruncate} />
      </Styled>
    );
  }
}

export default App;
