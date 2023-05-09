import React from "react";
import s from "./Contacts.module.css";
import {connect} from "react-redux";

const ContactsView = (props) => {

    let contactsPage = props.contactsPage;

    return (
        <div className="container">

            <div className="contacts block">
                <h3>{contactsPage[0].blockName}</h3>
                {contactsPage[0].content}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        contactsPage: state.contactsPage
    }
}

const Contacts = connect(mapStateToProps)(ContactsView);

export default Contacts;