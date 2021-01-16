import React from 'react';
import './styles.css';
import SplitText from 'react-pose-text';

//import images
import img1 from './images/bootstrap.png';
import img2 from './images/css3.png';
import img3 from './images/git.png';
import img4 from './images/github.png';
import img5 from './images/html.png';
import img6 from './images/javascript.png';
import img7 from './images/json.png';
import img8 from './images/less.png';
import img9 from './images/node.png';
import img10 from './images/npm1.png';
import img11 from './images/react.png';
import img12 from './images/sass1.png';

//import images

function Home() {

    const title = {
        exit: {opacity: 3000, y: -600},
        enter: {
            opacity: 1,
            y: -5,
            x: -5,
            delay: ({charIndex}) => charIndex * 200
        }
    };

    return (
        <div>

            <div className="home-container">
                <div className="home-images">
                    <div><img src={img1} alt="icon"/></div>
                    <div><img src={img2} alt="icon"/></div>
                    <div><img src={img3} alt="icon"/></div>
                    <div><img src={img4} alt="icon"/></div>
                    <div><img src={img5} alt="icon"/></div>
                    <div><img src={img6} alt="icon"/></div>
                    <div><img src={img7} alt="icon"/></div>
                    <div><img src={img8} alt="icon"/></div>
                    <div><img src={img9} alt="icon"/></div>
                    <div><img src={img10} alt="icon"/></div>
                    <div><img src={img11} alt="icon"/></div>
                    <div><img src={img12} alt="icon"/></div>
                </div>
                <div className="home-intro">
                    <SplitText
                        initialPose="exit"
                        pose="enter"
                        charPoses={title}
                        className="intro-title"
                    >
                        Hello, my name is Artsiom
                    </SplitText>
                </div>
                <div className="home-intro-text">
                    I am a Front end Developer
                </div>
            </div>
        </div>
    )
}

export default Home;
