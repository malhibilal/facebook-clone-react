import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import "./Layout.css";
import LeftHandPanel from './Leftside-pannel/leftsidepanel';
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePannel/RightSidePannel';
import StatusBar from './StatusBar/statusbar';
import UploadSection from './UploadSection/UploadSection';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className='layout_main'>
                <Grid container>
                    <Grid xs={3}> 
                    <LeftHandPanel/>
                    </Grid>
                    <Grid xs={6} className="middle_container">
                  <StatusBar/>
                  <UploadSection/>
                  <PostContainer/>
                         </Grid>
                    <Grid xs={3}> 
                    <RightSide/>
                    </Grid>
                </Grid>
            </div>
          );
    }
}
 
export default Layout;