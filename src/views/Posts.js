/*jshint esversion: 6 */ 
import React, { Component } from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import {Route, Link} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';


const headerStyle = {
  textDecoration: "underline"
};


function JsonPosts(props) {
  let comments = props.comments.filter(comment => parseInt(comment.postId, 10) === parseInt(props.match.params.id, 10)+1);
  return (
      <div>
          <h1 style={headerStyle}>{props.posts[props.match.params.id].title}</h1>
          <p>{props.posts[props.match.params.id].body}</p>
          <p style={headerStyle}>Comments:</p>
          <ul>
            {comments.map(comment => <li key={comment.id}>{comment.name} => {comment.body}</li>)}
          </ul>
          <button className="mdc-button--raised"><a onClick={() => scroll.scrollTo(100)}>Back to Top</a></button>
      </div>
  )
}

class Posts extends Component { 
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      posts: [],
      comments: [],
    }
  }

  async componentDidMount(){
    let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await resp.json();

    let resp2 = await fetch('https://jsonplaceholder.typicode.com/comments');
    let json2 = await resp2.json();
    
    this.setState({
      isLoading: false,
      posts: json,
      comments: json2
    });
  }



  renderPost = (props) => {
    // console.log(this.state);
    return <JsonPosts posts={this.state.posts} comments={this.state.comments} {...props}></JsonPosts>
  }



  render () {
    return (
        <div id='postsInfo'>
          <Helmet>
            <title>Rory | Posts</title>
          </Helmet>
          <Header/>
          <div>
            {
            this.state.posts.map((dynamicData,id) =>
            <div key={id}>
              <Link to={`/posts/${id}`} onClick={() => scroll.scrollToBottom()}>{dynamicData.title}</Link>
            </div>
            )}
          </div>

          <hr/>

          {this.state.isLoading? null : <Route path={`/posts/:id`} component={this.renderPost} />}

        </div>
    );
  }
}
    
export default Posts;
