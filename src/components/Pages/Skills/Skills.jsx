import React from "react";
import s from "./Skills.module.css";
import {connect} from "react-redux";

const SkillsView = (props) => {

    let skillsPage = props.skillsPage;

    return (
        <div className="container">

            <div className="about-me block">
                <h3>{skillsPage[0].blockName}</h3>
                {skillsPage[0].content}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        skillsPage: state.skillsPage
    }
}

const Skills = connect(mapStateToProps)(SkillsView);

export default Skills;