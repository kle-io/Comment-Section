import React from 'react';
import Comment from './FeedComments.jsx';
import styles from '../styles/Feed.css';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.Feed}>
        <div className={styles.Feed_commentsNumber}>{(this.props.song.Comments.length).toString()} comments</div>
        <ul className={styles.Feed_ul}>
          {this.props.song.Comments.map(comment => {
            return <Comment comment={comment} handleClick={this.props.handleClick} currentSong={this.props.song._id} />
          })}
        </ul>
      </div>
    )
  }
}

export default Feed;