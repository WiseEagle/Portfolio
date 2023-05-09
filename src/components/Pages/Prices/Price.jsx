import React from "react";
import s from "./Price.module.css";
import {connect} from "react-redux";

const PriceView = (props) => {

    let content = props.pricePage;

    return (
        <div className="container">

            <div className="price-short block">
                <h3>{content[0].blockName}</h3>
                <div dangerouslySetInnerHTML={{ __html: content[0].content }}/>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        pricePage: state.pricePage
    }
}

const Price = connect(mapStateToProps)(PriceView);

export default Price;