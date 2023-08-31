import React from 'react'
import "./Profile.css"
import { useHistory } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Settings = () => {
    const history = useHistory()
    const handleProfile = () => {
        history.push("/profile")
    }
    const handleCredentials = () => {
        history.push("/tenantCredentials")
    }
    return (
        <div className='settings'>
            <Header type="back" name="Settings" link="/home" />
            <div className='settingsMain'>
                <SettingsUnit icon={"Assets/Settings/user.png"} title={"Account"} onClick={handleProfile} />
                <SettingsUnit icon={"Assets/Settings/notification.png"} title={"Notifications"} />
                <SettingsUnit icon={"Assets/Settings/credentials.png"} title={"Tenant Credentials"} onClick={handleCredentials} />
                <SettingsUnit icon={"Assets/Settings/privacy.png"} title={"Privacy & Security"} />
                <SettingsUnit icon={"Assets/Settings/help.png"} title={"Help & Support"} />
                <SettingsUnit icon={"Assets/Settings/about.png"} title={"About"} />
                <SettingsUnit icon={"Assets/Settings/logout.png"} title={"Log Out"} />
            </div>
            <Footer page="My Profile" />
        </div>
    )
}

export default Settings;

const SettingsUnit = ({ icon, title, onClick }) => {
    return (
        <div className='settingsUnit'>
            <div className='settingsIcon'>
                <img src={icon} />
            </div>
            <div className='settingsTitle'>
                <p>{title}</p>
            </div>
            <div className='settingsClick' onClick={onClick}>
                <img src="Assets/Settings/right.png" />
            </div>
        </div>
    )
}