import { Avatar, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import "./UploadSection.css";
import video from "../../fb-images/images/video.png"
import image from "../../fb-images/images/image.png"
import feelings from "../../fb-images/images/feelings.png"

class UploadSection extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div >
               <Paper className='upload_container'>
                    <div className='upload_top'>
                        <div>
                             <Avatar className='upload_img' src='https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343'/>
                         </div>
                         <div>
                            <input className='upload_text' placeholder='Whats on your mind?' type="text"/>
                         </div>
                     </div>

                     <div className='upload_bottom'>
                        <div className='upload_tab'>
                            <img src={video}height="30" width="30" />
                            <div className='upload_text'>Live Video</div>
                        </div>
                        <div className='upload_tab'>
                            <img src={image} height="30" width="30"/>
                            <div className='upload_text'> Photos</div>
                        </div>
                        <div className='upload_tab'>
                            <img src={feelings} height="30" width="30"/>
                            <div className='upload_text'>Feeling/Activities</div>
                        </div>

                     </div>
               </Paper>
            </div>
         );
    }
}
 
export default UploadSection;