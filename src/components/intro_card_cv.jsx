import React from "react";
import '../styles/intro_card_1.css'
import Button from '../components/button'
import OutlinedButton from "./button_outlined";
import profilePic from '../assets/profile-pic.png'

function IntroCard1(){
    return <div className="intro-card-1">
          <div className="profile-content">
               <div className="title-1">
                    Hi, I am
               </div>
               <div className="my-name-text">
                    Jainaveen 
               </div>
               <div className="title-1">
                    Software Developer
               </div>
               <div className="btn-div">
                    <Button/>
                    <OutlinedButton/>
               </div>
          </div>
       <img src={profilePic} alt="profile" width="500px" height="500px" className="profile-pic"/>
    </div>
}

export default IntroCard1;