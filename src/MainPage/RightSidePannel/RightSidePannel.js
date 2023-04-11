import React, { Component } from 'react';
import"./RightSidePannel.css";
import ImageLayout from '../imageLayout';
import friendslogo from "../../fb-images/images/friends.jpg";
import recent from "../../fb-images/images/recent.png";
import groups from "../../fb-images/images/groups.png";
import marketplace from "../../fb-images/images/marketplace.png";
import watch from "../../fb-images/images/watch.png";
import memories from "../../fb-images/images/memories.png";
import pages from "../../fb-images/images/pages.png";
import reals from "../../fb-images/images/reals.jpg";


class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
   

// creating a getData function to get a fake json response
getData=()=>{
    let jsondata = [
        //passing the properities which we want
        {
            "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
            "text":"Bilal Malhi"
         },
        {
            "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
           "text":"Maryam Saddiqa "
        },
        {
            "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
            "text":"Sadia Bilal"  
        },
        {
             "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
            "text":"Bareen Bilal"
         },
         {
             "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
            "text":"Mumtaz Umer"
         },
         {
             "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
             "text":"Haseeb"
         },
         {
             "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
             "text":"Rabia"
         },
         {
             "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
             "text":"Komal"
         },
         {
             "image":"https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-1/224027772_10220100182358100_3887853217892475213_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=o46WgV0--kwAX89rxRB&_nc_ht=scontent-cph2-1.xx&oh=00_AfCoHD03o5cD-ss8dgCIhg5QpHfoM0BgGJvPG_jywhHP3Q&oe=63FBD343",
             "text":"Sidra"
         }
    ];
    // iterate jsondata in data variable
    this.setState({data:jsondata});
}

 // function to mount the data, this function will run first and will create a series of other functions
 componentDidMount(){
    this.getData();
};

    state = {  }
    render() { 
        return ( 
            <div className='rightside_container'>
               <div className='rightside_header'>
                Contacts
               </div>
               <div className='rightside_contactslist'>
               {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text}/>
                    ))
                }   

               </div>
            </div>
         );
    }
}
 
export default RightSide;