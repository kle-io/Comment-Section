import React from 'react';

class App extends React.Components{
  constructor(props){
    super(props);
    this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount(){
    this.getSongs();
  }

  getSongs(){
    fetch('/api/songs', {
      method: 'GET'
    })
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => {
      console.log('error getting songs')
    })
  }

  render() {
    return (
    <div></div>
    )
  }
}

export default App