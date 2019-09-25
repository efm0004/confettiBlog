import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
  //this is our state object
  state = {
    isShowing : false,
    posts : [
      {
        title : "My first confetti blog",
        content : "I love confetti!!! I PUT IT EVERYWHERE!!!",
        user : "efm0004"
      },
      {
        title : "Pandas are fun!",
        content: "I dress like one every day!",
        user: "cwill833"
      }
    ]
}
  //we will define all event logic here
  handleClick = event => {
    this.setState({
      isShowing : !this.state.isShowing
    })
  }
  //this is our render which handles the view
  render() {
    //compose componenets down here and later we will pull these out
    // TODO: extract these to separate components
    const title = <h1>Confetti Blog</h1>
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <li key={index} className='post'>
          <h3 className="postTitles">{item.title}</h3>
          <p>{item.content}</p>
          <h6>{item.user}</h6>
        </li>
      )
    })
    return (
      <div className="App container">
        <Nav />
        {this.state.isShowing ? title : null }
        <ul>{composedPosts}</ul>
        <button onClick={this.handleClick}>click me</button>
        <Footer />
      </div>
    );
  }
}

export default App;
