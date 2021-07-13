import React from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './Home.css'

class Home extends React.Component {
    render() {
        return(
            <div>
                <AnimatedOnScroll animationIn="headShake" animationInDuration={600}>
                <div className="homediv">
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                </div>
                </AnimatedOnScroll>
                <div className="homediv">
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                </div>
                <div className="homediv">
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                    <h1> Home </h1>
                </div>
                <div className="homediv">
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                    <h2>test</h2>
                </div>
            </div>
        );
    }
}

export default Home;