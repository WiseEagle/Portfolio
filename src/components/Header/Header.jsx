import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.AppHeader}>
            <div className={"container "+s.flexBeetwen}>

                <div className={s.logo}>
                    <span>Моє портфоліо</span>
                </div>
                <div className={s.menu}>
                    <NavLink to="/">Головна</NavLink>
                    <NavLink to="/about">Про мене</NavLink>
                    <NavLink to="/portfolio">Проекти</NavLink>
                    <NavLink to="/skills">Навички</NavLink>
                    <NavLink to="/price">Мої бажання</NavLink>
                    <NavLink to="/contacts">Контакти</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;