import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./Profile.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { updateToast } from '../../actions/toastActions'
import { CodeAnalogy } from '../../Components/Toasty/Toasty'

const Profile = () => {
    return (
        <div className='profMain'>
            <Header type="back" name="My Profile" link="/home" />
            <div className='profContainer'>
                <ProfileCard />
                <PGCard />
            </div>
            <Footer page="My Profile" />
        </div>
    )
}

export default Profile
const PGCard = () => {
    const { propertyName, contact, pincode, propertyCode } = useSelector(state => state.user)
    return (
        <div className='profilePGCard'>
            <div className='pgName'>
                <p>{propertyName}</p>
            </div>
            <div className='pgDetails'>
                <div className='pgNumber'>
                    <p>{contact}</p>
                </div>
                <div className='pgPin'>
                    <p>{pincode}</p>
                </div>
            </div>
            <div className='pgCode'>
                <p><span>Pg Code:</span><span className='pgCodeValue'>{propertyCode}</span></p>
            </div>
        </div>
    )
}
const ProfileCard = () => {
    const { email } = useSelector(state => state.user)
    const handleEdit = () => {
        updateToast({
            code: CodeAnalogy.ERROR,
            title: "Will Be Available Soon."
        })
    }
    return (
        <div className='proFirst'>
            <div className='proImage'>
                <img src="Assets/components/user.png" />
            </div>
            <div className='proImage'>
                <p>{email}</p>
            </div>
            <div className='proImage'>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
}