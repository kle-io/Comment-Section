import React from 'react';
import styles from '../styles/SongInfo.css';

class SongInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.toggleView = this.toggleView.bind(this)
  }

  toggleView() {
    console.log(this.state)
    if (this.state.toggled) {
      return (
        <div>
        <div><b>C-line:</b></div>
        <div>© HRSF 124 LLC</div>
        <button onClick={this.handleClick}>Show less</button>
      </div>
      )
    } else {
      return <button onClick={this.handleClick}>Show more</button>
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
    <div className={styles.songInfo}>
      <div className={styles.artist}>
        <img src={this.props.song.artist_photo} className={styles.artist_image}></img>
        <div className={styles.artist_name}>
          {this.props.song.artist}
        </div>
        <ul className={styles.artist_stats}>
          <li className={styles.artist_statItem}>{this.props.song.followers}</li>
          <li className={styles.artist_statItem}>25</li>
        </ul>
        <div className={styles.recordingInfo_box}>
          <button type="submit" className={styles.recordingInfo_button_orange}>Follow</button>
        </div>
      </div>
      <div className={styles.recordingInfo}>
        <div className={styles.recordingInfo_box}>
          <p>Follow {this.props.song.artist} and others on Soundcloud.</p>
        <div className={styles.recordingInfo_buttonBar}>
          <button type="button" className={styles.recordingInfo_button_orange}>Create a SoundCloud account</button>
          <button type="button" className={styles.recordingInfo_button}>Sign in</button>
        </div>
        </div>
        <div><b>Release Date:</b></div>
        <div>
          {this.props.song.release_date.slice(4,16)}
        </div>
        <div><b>P-line:</b></div>
        <div>℗ HRSF 124 Records</div>
        <div>{this.toggleView()}</div>
      </div>
    </div>
    )
  }
}

export default SongInfo