import React from 'react';
import Comment from './FeedComments.jsx';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false;
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    return (
      <div>
        <ul>
          {props.Comments.map(comment => {
            return <li><Comment comment={comment} handleClick={this.handleClick}/></li>
          })}
        </ul>
      </div>
    )
  }
}

export default Feed;