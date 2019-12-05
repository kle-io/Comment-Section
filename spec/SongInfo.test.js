import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SongInfo from '../client/components/SongInfo.jsx';

describe('SongInfo', () => {
  const song = {
    artist_photo: "randomIMG.URL"
    artist: "John Denver",
    likes: 5,000
    followers: 2,500,
    reposts: 800,
    plays: 20,000,
    release_date: "05/10/2000"
    Comments: []
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SongInfo song={song}/>)
  })

  it('should contain all the song information') {
    expect(wrapper.contains("John Denver")).toBe(true);
    expect(wrapper.contains("randomIMG.URL")).toBe(true);
    expect(wrapper.contains(2,500)).toBe(true);
    expect(wrapper.contains("05/10/2000")).toBe(true);
  }