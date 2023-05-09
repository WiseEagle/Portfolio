import React from "react";
import s from "./Mainpage.module.css";
import {connect} from "react-redux";

const MainpageView = (props) => {

    let mainPage = props.mainPage;

    return (
        <div className="container">

            <div className="about-me block">
                <h3>{mainPage[0].blockName}</h3>
                {mainPage[0].content}
            </div>
            <div className="portfolio-short block">
                <h3>{mainPage[1].blockName}</h3>
                {mainPage[1].content}
            </div>
            <div className="price-short block">
                <h3>{mainPage[2].blockName}</h3>
                <div dangerouslySetInnerHTML={{ __html: mainPage[2].content }}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage
    }
}

const Mainpage = connect(mapStateToProps)(MainpageView);

export default Mainpage;