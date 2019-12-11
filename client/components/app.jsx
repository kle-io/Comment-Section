import React, { Suspense, lazy } from 'react';
import CommentBar from './CommentBar.jsx';
import SongInfo from './SongInfo.jsx';
import '../styles/app.css';
const Feed = lazy(() => import('./Feed.jsx'));

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      songs: [{
        artist_photo: "https://loremflickr.com/640/480",
        artist: "John Denver",
        likes: 5000,
        followers: 2500,
        reposts: 800,
        plays: 20000,
        release_date: "05/10/2000",
        Comments: [
          {
            user_photo: "https://loremflickr.com/640/480",
            username: "Johnny69",
            time: "2:30",
            comment_body: "I'm a young 16 year old recording songs on my apple earbuds.",
            timestamp: "7 hours ago",
            Replies: [
              {
                user_photo: "https://loremflickr.com/640/480",
                username: "Johnathan70",
                time: "2:30",
                reply_body: "These self-promos got me sick, check out my soundcloud.",
                timestamp: "8 hours ago"
              }
            ]
          }]}],
      currentSong: {
        artist_photo: "https://loremflickr.com/640/480",
        artist: "John Denver",
        likes: 5000,
        followers: 2500,
        reposts: 800,
        plays: 20000,
        release_date: "05/10/2000",
        Comments: [
          {
            user_photo: "https://loremflickr.com/640/480",
            username: "Johnny69",
            time: "2:30",
            comment_body: "I'm a young 16 year old recording songs on my apple earbuds.",
            timestamp: "7 hours ago",
            Replies: [
              {
                user_photo: "https://loremflickr.com/640/480",
                username: "Johnathan70",
                time: "2:30",
                reply_body: "These self-promos got me sick, check out my soundcloud.",
                timestamp: "8 hours ago"
              }
            ]
          }]},
      comment: '',
      reply: ''
    }

    this.getSongs = this.getSongs.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  componentDidMount() {
    console.log('mounted successfully')
    this.getSongs();
  }

  getSongs() {
    fetch('/api/songs', {
      method: 'GET'
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data)
      this.setState({
        song: data,
        currentSong: data[5]
      })
    })
    .catch((err) => {
      console.log('error getting songs')
    })
  }

  //commentInfo = { currentSong, comment }
  postComment(commentInfo) {
    console.log(commentInfo)
    fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify(commentInfo),
      headers: {'Content-Type': 'application/json'}
    })
    .then(() => {
      this.getSongs()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  //replyInfo = { currentSong, comment, reply }
  postReply(replyInfo) {
    console.log(replyInfo)
    fetch('/api/replies', {
      method: 'POST',
      body: JSON.stringify(replyInfo),
      headers: {'Content-Type': 'application/json'}
    })
    .then(() => {
      console.log('getting songs...')
      this.getSongs()
    })
    .catch(() => {
      console.log('error re-getting songs')
    })
  }

  render() {
    console.log(this.state.currentSong)
    return (
    <div>
      <CommentBar song={this.state.currentSong} handleClick={this.postComment}/>
      <SongInfo song={this.state.currentSong} />
      <Suspense fallback={<div>Loading...</div>}>
        <Feed song={this.state.currentSong} handleClick={this.postReply}/>
      </Suspense>
    </div>
    )
  }
}

export default App