import React from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './Home.css'

class Home extends React.Component {
    render() {
        return(
            <div>
                <AnimatedOnScroll animationIn="fadeIn" animationInDuration={600}>
                <div className="homediv">
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                </div>
                </AnimatedOnScroll>
				<AnimatedOnScroll animationIn="fadeIn" animationInDuration={600}>
                <div className="homediv">
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                </div>
				</AnimatedOnScroll>
				<AnimatedOnScroll animationIn="fadeIn" animationInDuration={600}>
                <div className="homediv">
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                </div>
				</AnimatedOnScroll>
				<AnimatedOnScroll animationIn="fadeIn" animationInDuration={600}>
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
    }
}

export default Home;