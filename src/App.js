import Header from "./components/Header/Header";
import s from './App.module.css';
import Mainpage from "./components/Pages/Mainpage/Mainpage";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Skills from "./components/Pages/Skills/Skills";
import Price from "./components/Pages/Prices/Price";
import About from "./components/Pages/About/About";
import Contacts from "./components/Pages/Contacts/Contacts";



function App(props) {

  return (

          <div className={s.App}>
              <Header />
              <div className={s.AppContent}>
                  <Routes>
                      <Route path="/" element={<Mainpage/>} />
                      <Route path="/about" element={<About />} />
                      <Route path="/portfolio" element={<Portfolio portfolioPage={props.portfolioPage}/>} />
                      <Route path="/skills" element={<Skills skillsPage={props.skillsPage}/>} />
                      <Route path="/price" element={<Price pricePage={props.pricePage}/>} />
                      <Route path="/contacts" element={<Contacts contactsPage={props.contactsPage}/>} />
                  </Routes>


              </div>
              <Footer />
          </div>

  );
}

export default App;
