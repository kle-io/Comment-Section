import React from 'react';

let SongInfo = ({ song }) => {
  <div>{song.artist_photo}</div>
  <div>{song.artist}</div>
  <div>{song.followers}</div>
  <div>{song.release_date}</div>
}

export default SongInfo