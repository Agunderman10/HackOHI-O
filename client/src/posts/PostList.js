import React, {Component, useEffect, useState} from 'react'
//import PostData from "../data/posts.json"
import './PostList.css'



class PostList extends Component {
  constructor(props){
    super(props)
    this.state = {
      post_res: null
    }
    fetch(`http://localhost:8080/projects`)
      .then(response => response.json())
      .then(response => this.setState({post_res: response}))
  }

  render(){
    if (this.state.post_res != null){
      return (
        
        <div>    
          {
            this.state.post_res.map((postDetail)=>{
              console.log(postDetail);
              return <div>
      
            <div className="card ">
               <p>task name: {postDetail.project_name}</p>
               <p> due date: {postDetail.project_due_date}</p>
               <p>task description: {postDetail.project_description}</p>
               <p>company: {postDetail.project_company}</p>
            </div>
              </div>
          })
          }
        </div>
      )
    }
    return null;
  }
}

export default PostList;
