import React from 'react';

class CommentBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return(
      <input value={this.state.input} onChange={this.handleChange}></input>
    )
  }
}

export default CommentBar;