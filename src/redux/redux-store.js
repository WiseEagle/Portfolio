import {combineReducers, legacy_createStore} from "redux";
import mainPageReducer from "./mainPageReducer";
import aboutPageReducer from "./aboutPageReducer";
import portfolioPageReducer from "./portfolioPageReducer";
import skillsPageReducer from "./skillsPageReducer";
import pricePageReducer from "./pricePageReducer";
import contactsPageReducer from "./contactsPageReducer";

let reducers = combineReducers({
    mainPage: mainPageReducer,
    aboutPage: aboutPageReducer,
    portfolioPage: portfolioPageReducer,
    skillsPage: skillsPageReducer,
    pricePage: pricePageReducer,
    contactsPage: contactsPageReducer
});

let store = legacy_createStore(reducers);

export default store;