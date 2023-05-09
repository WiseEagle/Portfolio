import React from "react";
import s from "./About.module.css";
import {connect} from "react-redux";

const AboutView = (props) => {

    let aboutPage = props.aboutPage;

    return (
        <div className="container">

            <div className="about-me block">
                <h3>{aboutPage[0].blockName}</h3>
                {aboutPage[0].content}
            </div>

        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        aboutPage: state.aboutPage
    }
}

const About = connect(mapStateToProps)(AboutView);

export default About;