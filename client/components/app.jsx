import React from 'react';
import Feed from './Feed.jsx';
import CommentBar from './CommentBar.jsx';
import SongInfo from './SongInfo.jsx';

class App extends React.Components{
  constructor(props){
    super(props);

    this.state = {
      songs: [],
      song: {},
      comment: '',
      reply: ''
    }
    this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    fetch('/api/songs', {
      method: 'GET'
    })
    .then((data) => {
      this.setState({
        songs: data
      })
    })
    .then(() => {
      this.setState({
        song: data[0]
      })
    })
    .catch((err) => {
      console.log('error getting songs')
    })
  }

  postComment(comment) {
    fetch('/api/comments', {
      method: 'POST',
      data: comment
    })
    .then(() => {

    })
  }
  render() {
    return (
    <div>
      <Feed Comments={this.state.song.Comments}/>
    </div>
    )
  }
}

export default App