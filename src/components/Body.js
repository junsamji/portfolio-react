import React from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './Body.css'

function Body() {
    return (
        <div>
            <AnimatedOnScroll animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={600}>
            <div className="homediv">
                <h1> Home </h1>
                <h1> Home </h1>
                <h1> Home </h1>
                <h1> Home </h1>
                <h1> Home </h1>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={600}>
            <div className="homediv">
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={600}>
            <div className="homediv">
                <h1> Home </h1>
                <h1> Home </h1>
                <h1> Home </h1>
                <h1> Home </h1>
                <h1> Home </h1>
            </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={600}>
            <div className="homediv">
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
                <h2>test</h2>
            </div>
            </AnimatedOnScroll>
        </div>
    );
};

export default Body;