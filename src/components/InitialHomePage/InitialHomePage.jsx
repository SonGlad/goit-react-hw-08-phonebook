import { HomeStyledContainer } from "./InitialHomePage.styled";
import { NavLink } from 'react-router-dom';
import greetingPicture from "../../images/home-page-greeting.png"
import loginPicture from "../../images/login-button.png"
import registerPicture from "../../images/register-button.png"



export const InitialHomePage = () => {
    return (
        <HomeStyledContainer>
            <div className="title-container">
                <h1 className='home-title'>
                Welcome to Phonebook web application!
                </h1>
                <img className="greeting-picture" src={greetingPicture} alt='' width='100'/>
            </div>
            <div className="descr-container">
                <h2 className="descr-title">It's a powerful and convenient web application that will help you efficiently organize and manage your personal phonebook.</h2>
                <p className="descr-title-text">The Phonebook web application is designed to simplify your daily life and streamline contact management. Whether you need to organize business contacts or simply store information about friends and family, this application will help you keep and find the necessary contacts all in one place.</p>
                <h3 className="descr-key">The key features of the application include:</h3>
                <ul className="descr-list">
                    <li className="descr-list-item">
                        <p>Adding and storing contacts with essential information such as name, phone number, and email address.</p>
                    </li>
                    <li className="descr-list-item">
                        <p>The ability to view, edit, and delete contacts.</p>
                    </li>
                    <li className="descr-list-item">
                        <p>Convenient search functionality within your phonebook for quick access to the desired contacts.</p>
                    </li>
                    <li className="descr-list-item">
                        <p>An intuitive and user-friendly interface.</p>
                    </li>
                </ul>
                <p className="descr-text">Try the Phonebook web application now and discover how easy and convenient it is to manage your phonebook online!</p>
            </div>
            <div className="nav-container">
                <div className="register-container">
                    <p className="nav-descr">Do you still not have an account?</p>
                    <NavLink className='nav-link' to="/register">
                        <img className="link-picture" src={registerPicture} alt="" />
                    </NavLink>
                </div>
                <div className="login-container">
                    <p className="nav-descr">Are you already a registered user?</p>
                    <NavLink className='nav-link' to="/login">
                        <img className="link-picture" src={loginPicture} alt="" />
                    </NavLink>
                </div>
            </div>
        </HomeStyledContainer>
    );
};