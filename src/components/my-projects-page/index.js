import React from 'react';
import './styles.css';
import Card from "../../atoms/cards";

function MyProjects() {
    return (
        <div className="projects">
            <div className="projects-container">
                <div className="projects-section1 section">
                    <div className="section-wrapper">
                        <div>
                            <h1>
                                This is a simple guide around my works. Where I used to different techniques and
                                methodologies.
                                Such as BEM, simple vanilla JS with CSS, and HTML or more complex like React and
                                etc.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="projects-section2 section">
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default MyProjects;
