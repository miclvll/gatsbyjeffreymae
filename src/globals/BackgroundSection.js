import React from 'react';
import BackgroundPic from "gatsby-background-image" ;

export default function BackgroundSection({image,styleClass,title,subtitle,children}) {
    return (


        <BackgroundPic className = {styleClass}
        fluid= {image}>
        <h1 className ="title text-white text-uppercase text-center display-4 font-weight-bold">{title}</h1>
        
        <h3 classsName = "subtitle text-white text-center display-3 font-weight-bold">{subtitle}</h3>
        {children}
            
        </BackgroundPic>
    );
}

BackgroundSection.defaultProps = {

title : "default-title",
subtitle : "default-subtitle",
styleClass : "default-background"


}



