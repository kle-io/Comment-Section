import React from 'react';
import styles from '../styles/CommentBar.css';
import { IoIosPlay, IoIosHeartEmpty, IoIosHeart, IoMdGitCompare } from 'react-icons/io';

class CommentBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      likeToggled: false,
      repostToggled: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.toggledLike = this.toggledLike.bind(this)
    this.toggledRepost = this.toggledRepost.bind(this)
    this.toggledLikes = this.toggledLikes.bind(this)
    this.toggledReposts = this.toggledReposts.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  handleToggle(target) {
    console.log(styles)
    console.log(styles.commentForm)
    this.setState({
      [target] : !(this.state[target])
    });
  }

  toggledLike() {
    if (!this.state.likeToggled) {
      console.log(this.props.song.likes)
      return <button onClick={() => {this.handleToggle('likeToggled')}} className={styles.footer_button}>Like</button>
    } else {
      console.log(this.state)
      return <button onClick={() => {this.handleToggle('likeToggled')}} className={styles.footer_button}>Liked</button>
    }
  }

  toggledRepost() {
    if (!this.state.repostToggled) {
      return <button onClick={() => {this.handleToggle('repostToggled')}} className={styles.footer_button}>Repost</button>
    } else {
      return <button onClick={() => {this.handleToggle('repostToggled')}} className={styles.footer_button}>Reposted</button>
    }
  }

  toggledLikes() {
    if (!this.state.likeToggled) {
      return <div>{this.props.song.likes}</div>
    } else {
      return <div>{(this.props.song.likes) + 1}</div>
    }
  }

  toggledReposts() {
    if (!this.state.repostToggled) {
      return <div>{this.props.song.reposts}</div>
    } else {
      return <div>{(this.props.song.reposts) + 1}</div>
    }
  }

  render() {
    return(
      <div>
        <div className={styles.commentForm}>
          <div className={styles.commentForm_wrapper}>
            <div className={styles.commentForm_avatar}>
              <img src='https://lorempixel.com/40/40'/>
            </div>
            <div classNames={[styles.commentForm_inputWrapper, styles['sc-border-box']].join(' ')}>
              <input type="text" value={this.state.input} onChange={this.handleChange} placeholder='Write a comment' className={styles.commentForm_input}></input>
              <input type="submit" onClick={() => {this.props.handleClick({ currentSong: this.props.song._id, comment: this.state.input })}} className={styles.commentForm_submitButton}></input>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer}>{this.toggledLike()}</div>
          <div className={styles.footer}>{this.toggledRepost()}</div>
          <button className={styles.footer_button}>Share</button>
          <button className={styles.footer_button}>Add to Next up</button>
          <button className={styles.footer_button}>More</button>
          <ul className={styles.footer_stats}>
            <li className={styles.footer_statsItem}>{this.props.song.plays}</li>
            <li className={styles.footer_statsItem}>{this.toggledLikes()}</li>
            <li className={styles.footer_statsItem}>{this.toggledReposts()}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CommentBar;