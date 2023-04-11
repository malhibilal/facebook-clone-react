import { Avatar, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import lahore from "../../fb-images/images/Lahore.jpeg"
import like from "../../fb-images/images/likebutton.png"
import comment from "../../fb-images/images/comment.png"
import share from "../../fb-images/images/share.png"
import likeInColor from "../../fb-images/images/likeincolor.png"

class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    IsImageAvailable=(data)=>{ // if the data is not available return false otherwise return data
        return data==""?false:true;
    }
    render() { 
        return ( 
            <div>
               <Paper className='post_container'>
                {/* header*/}
               <div className='post_header'>
                <div className='post_header_img'>
                    <Avatar className='post_img' src='https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&amp;_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=thL9vw3PLYEAX9qJ8Zz&amp;_nc_ht=scontent-cph2-1.xx&amp;oh=00_AfAgg97uUpPBDfnyr9mAYqXUfAGT3WpcdoIscnm4Z1NGag&amp;oe=63F9D903'/>
                </div>
                <div className='post_header_text'>
                  {this.props.object.user_name}
                </div>
               </div>
                  {/* description*/}
                <div className='post_description'>
                {this.props.object.description}
                    
                </div>
                  {/* image*/}
                <div className='post_image'>
                    {
                        this.IsImageAvailable(this.props.object.post_img) ? <img src={this.props.object.post_img} width="540px"/>: <span></span>
                    }
                   
                </div>
                  {/* like count*/}
                <div className='post_likeCountContainer'>
                    <div className='post_like_count_div'>
                        <img className='post_LikeImg' src={likeInColor}/>
                    </div>
                    <div className='post_likeCount'>
                           {this.props.object.like}
                     </div>
                </div>
                
                  {/* like share box*/}
                <div className='post_likeShareBox'>
                    <div className='post_like'>
                        <div className='post_like_tab'>
                            <img className='post_likeImg'src={like}/>
                        </div>
                        <div className='post_likeText'>
                            Like
                        </div>
                    </div>

                    <div className='post_like'>
                        <div className='post_like_tab'>
                            <img className='post_likeImg'src={comment}/>
                        </div>
                        <div className='post_likeText'>
                            Comment
                        </div>
                    </div>

                    <div className='post_like'>
                        <div className='post_like_tab'>
                            <img className='post_likeImg'src={share}/>
                        </div>
                        <div className='post_likeText'>
                            Share
                        </div>
                    </div>
                </div>
                  {/* comment box*/}
                <div>
                <div className='upload_top'>
                        <div>
                             <Avatar className='upload_img' src='https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343'/>
                         </div>
                         <div>
                            <input className='upload_text' placeholder='Write a comment...' type="text"/>
                         </div>
                     </div>
                </div>
               </Paper>
            </div>
         );
    }
}
 
export default Post;