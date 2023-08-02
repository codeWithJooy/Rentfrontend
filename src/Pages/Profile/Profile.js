import React, { useState, useEffect } from 'react'
import "./Profile.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

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
    return (
        <div className='profilePGCard'>
            <div className='pgName'>
              <p>New Heaven</p>
            </div>
            <div className='pgDetails'>
                <div className='pgNumber'>
                  <p>7980651358</p>
                </div>
                <div className='pgPin'>
                  <p>700047</p>
                </div>
            </div>
            <div className='pgCode'>
                <p><span>Pg Code:</span><span className='pgCodeValue'>123456</span></p>
            </div>
        </div>
    )
}
const ProfileCard = () => {
    return (
        <div className='proFirst'>
            <div className='proImage'>
                <img src="Assets/components/user.png" />
            </div>
            <div className='proImage'>
               <p>abhimicro3@gmail.com</p>
            </div>
            <div className='proImage'>
               <button>Edit</button>
            </div>
        </div>
    )
}