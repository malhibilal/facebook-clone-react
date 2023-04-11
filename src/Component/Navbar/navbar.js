import {Grid } from '@mui/material';
import React, { Component } from 'react';
import './navbar.css';
import fblogo from "../../fb-images/images/logo.png"
import homeIcon from "../../fb-images/images/home.png"
import watchIcon from "../../fb-images/images/watch.png"
import marketplace from "../../fb-images/images/marketplace.png"
import groupIcon from "../../fb-images/images/groups.png"
import pageIcon from "../../fb-images/images/pages.png"
import { Avatar } from '@material-ui/core';
import uploadIcon from "../../fb-images/images/upload.png"
import messanger1Icon from "../../fb-images/images/messanger1.png"
import notificationIcon from "../../fb-images/images/notification.png"
import menuIcon from "../../fb-images/images/menu.jpg"
class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div> 
                <Grid container className='navbar_main'>
                    <Grid xs={3}> 
                    <div className='navbar_leftbar'>
                        <img className='navbar_logo' src={fblogo} alt="" width="35px"/>
                       <input className='navbar_search' type="text" placeholder='Search Facebook'/>
                    </div>
                    </Grid>
                    <Grid xs={6}> 
                    <div className='navbar_middle'>
                        <div className='navbar_tab active'>
                        <img src={homeIcon} alt="" height="35px" width="35px"/>
                        </div>
                        <div className='navbar_tab'>
                        <img src={watchIcon}  alt="" height="35px" width="35px"/>
                        </div>
                        <div className='navbar_tab'>
                        <img src={marketplace} alt="" height="35px" width="35px"/>
                        </div>
                        <div className='navbar_tab'>
                        <img src={groupIcon}  alt="" height="35px" width="35px"/>
                        </div>
                        <div className='navbar_tab'>
                        <img src={pageIcon} alt="" height="35px" width="35px"/>
                        </div>
                    </div>
                    </Grid>

                    <Grid xs={3}> 
                   <div className='navbar_right'>
                    <div className='navbar_right_tab'>
                        <Avatar className='nabar_right_image' src='https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&amp;_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=thL9vw3PLYEAX9qJ8Zz&amp;_nc_ht=scontent-cph2-1.xx&amp;oh=00_AfAgg97uUpPBDfnyr9mAYqXUfAGT3WpcdoIscnm4Z1NGag&amp;oe=63F9D903'/>
                    <div className='navbar_profile_name'>Bilal </div>
                    <div className='navbar_right_icons'>
                        <img src={uploadIcon} alt="" width="35"></img>
                    </div>
                    <div className='navbar_right_icons'>
                        <img src={messanger1Icon} alt="" width="35"></img>
                    </div>
                    <div className='navbar_right_icons'>
                        <img src={notificationIcon} alt="" width="35"></img>
                    </div>
                    <div className='navbar_right_icons'>
                        <img src={menuIcon} alt="" width="35"></img>
                    </div>

                    </div>
                   
                   </div>
                  
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Navbar;