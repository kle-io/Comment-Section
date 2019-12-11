import React from 'react';
import Reply from './FeedReplies.jsx';
import styles from '../styles/Feed.css';
import commentStyles from '../styles/CommentBar.css'

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      toggled: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleReply = this.toggleReply.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.handleClick({
        currentSong: this.props.currentSong,
        comment: this.props.comment.index,
        reply: this.state.input
      })
    }
  }

  toggleReply() {
    if (this.state.toggled) {
      return (
      <div className={styles.replyForm}>
        <div className={commentStyles.commentForm_wrapper}>
          <div className={commentStyles.commentForm_avatar}>
            <img src='https://lorempixel.com/40/40'/>
          </div>
          <div classNames={[commentStyles.commentForm_inputWrapper, commentStyles['sc-border-box']].join(' ')}>
            <input type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder='Write a reply' className={commentStyles.commentForm_input}></input>
          </div>
        </div>
      </div>
      )
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    return (
    <li className={styles.Feed_list}>
      <div className={styles.Feed_comment}>
        <div className={styles.Feed_commentBox}>
          <img src={this.props.comment.user_photo} className={styles.Feed_image}/>
          <div className={styles.commentItem}>
            <div className={styles.commentText}>{this.props.comment.username}</div>
            <p>{this.props.comment.comment_body}</p>
          </div>
          <div>
            <div>{this.props.comment.time.slice(4,16)}</div>
            <button onClick={this.handleClick}>Reply</button>
          </div>
        </div>
          <ul>
            {this.props.comment.Replies.map(reply => {
              return <Reply reply={reply} handleClick={this.props.handleClick}/>
            })}
          </ul>
          <div>{this.toggleReply()}</div>
      </div>
    </li>
    )
  }
}


export default Comment;