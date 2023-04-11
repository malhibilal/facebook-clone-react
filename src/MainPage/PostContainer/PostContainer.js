import React, { Component } from 'react';
import Post from './Post';
import "./PostContainer.css";

class PostContainer extends Component {
    constructor(props) {
        super(props);
        // to make the post dynamically
        this.state={
            data:[]
        }
    }
    // to get the data from the backend using json
    getData=()=>{
        let json=[
            {
                "post_ID": 1,
                "user_id": 123456,
                "user_img":"url.....",
                "user_name":"Bilal Malhi",
                "description":"Beautiful Lahore",
                "post_img": "url of the image..",
                "like":"25"
            },
            {
                "post_ID": 2,
                "user_id": 1234567,
                "user_img":"",
                "user_name":"Maryam Saddiqa",
                "description":"Lahore",
                "post_img": "",
                "like":"72"
            }
        ]
        this.setState({data:json});
    }
    componentDidMount(){
        this.getData();
    }
    state = {  }
    render() { 
        return ( 
           <div>
            {
                this.state.data.map((item)=>(
                    <Post object={item}/>
                ))
            }
            
           </div>
         );
    }
}
 
export default PostContainer;