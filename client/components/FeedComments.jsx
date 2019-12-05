import React from 'react';
import Reply from './FeedReplies.jsx';

const Comment = (props) => {
  <div>
    <div>{props.comment.username}</div>
    <div>{props.comment.user_photo}</div>
    <div>{props.comment.timestamp}</div>
    <div>{props.comment.time}</div>
    <div>{props.comment.comment_body}</div>
    <ul>
      {props.comment.Replies.map(reply => {
        return <li><Reply reply={reply} handleClick={this.props.handleClick}/></li>
      })}
    </ul>
  </div>
}

export default Comment;