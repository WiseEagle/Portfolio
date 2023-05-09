import React from "react";
import s from "./Portfolio.module.css";
import {connect} from "react-redux";

const PortfolioView = (props) => {

    let portfolioPage = props.portfolioPage;

    return (
        <div className="container">

            <div className="portfolio-short block">
                <h3>{portfolioPage[0].blockName}</h3>
                {portfolioPage[0].content}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        portfolioPage: state.portfolioPage
    }
}

const Portfolio = connect(mapStateToProps)(PortfolioView);

export default Portfolio;