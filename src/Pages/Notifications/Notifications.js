import React, { useState, useEffect } from 'react'
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import PaymentNotiSection from './PaymentNotiSection'
import './Notifications.css'
import ComplaintNotiSection from './ComplaintNotiSection'

const Notifications = () => {
    const [navActive,setNavActive]=useState("Payment")
    return (
        <div className='notiMain'>
            <Header name="Notifications" type="back" link="/home" />
            <div className='notiContainer'>
                <div className='notiNavbar'>
                    <NavUnit text="Payment" navActive={navActive} setNavActive={setNavActive} />
                    <NavUnit text="Complaint" navActive={navActive} setNavActive={setNavActive} />
                    <NavUnit text="Hosting" navActive={navActive} setNavActive={setNavActive} />
                    <NavUnit text="Eviction" navActive={navActive} setNavActive={setNavActive} />
                </div>
                {
                    navActive=="Payment" && <PaymentNotiSection />
                }
                                {
                    navActive=="Complaint" && <ComplaintNotiSection />
                }
            </div>
            <Footer />
        </div>
    )
}

export default Notifications;

const NavUnit = ({ text, navActive, setNavActive }) => {
    const handleNavClick = () => {
        setNavActive(text)
    }
    return (
        <div className={`notiNavUnit ${text==navActive?"notiNavActive":""}`} onClick={handleNavClick}>
            <p className={`${text==navActive?"notiNavActiveText":""}`}>{text}</p>
        </div>
    )
}