import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentBar from '../client/components/CommentBar.jsx';

describe('Feed', () => {
  const song = {
    artist_photo: "randomImg.URL",
    artist: "John Denver",
    likes: 5,000
    followers: 2,500,
    reposts: 800,
    plays: 20,000,
    release_date: "05/10/2000"
    Comments: [
      {
        user_photo: "randomImg.URL",
        username: "Johnny69",
        time: "2:30",
        comment_body: "I'm a young 16 year old recording songs on my apple earbuds."
        timestamp: "7 hours ago",
        Replies: [
          {
            user_photo: "randomImg.URL",
            username: "Johnathan70",
            time: "2:30",
            reply_body: "These self-promos got me sick, check out my soundcloud.",
            timestamp: "8 hours ago"
          }
        ]
      },
      {
        user_photo: "randomImg.URL",
        username: "Wang105",
        time: "3:10",
        comment_body: "Wangus Beef Steak."
        timestamp: "9 hours ago",
        Replies: [
          {
            user_photo: "randomImg.URL",
            username: "FrederickZurding",
            time: "1:30",
            reply_body: "I'm going to pick someone random. How about Justin?",
            timestamp: "10 hours ago"
          }
        ]
      }
    ]
  }

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CommentBar song={song}/>)
  })

  it('should render the correct components') {
    expect(wrapper.contains(20,000)).toBe(true);
    expect(wrapper.contains(5,000)).toBe(true);
    expect(wrapper.contains(800)).toBe(true);
  }
