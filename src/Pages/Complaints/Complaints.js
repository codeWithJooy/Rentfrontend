import React from 'react'
import "./Complaints.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Complaints = () => {
    return (
        <div className='comMain'>
            <Header type="back" name="Complaints" link="/home"/>
            <div className='comContainer'>
                <ComplaintCard />
            </div>
            <Footer />
        </div>
    )
}

export default Complaints

const ComplaintCard = () => {
    return (
        <div className='comCard'>
            <div className='comCardTop'>
                <div className='comCardImg'>
                  <img src="Assets/components/picture.png" />
                </div>
                <div className='comCardText'>
                    <div className='comCardType'>
                       <span>Furniture</span> <span>Table</span>
                    </div>
                    <div className='comCardDescription'>
                      <p>Very Dirty FUrniture full of bugs.</p>
                    </div>
                </div>
            </div>
            <div className='comCardBottom'>
                <div className='comCardName'>
                    <p>Abhishek Hazra</p>
                </div>
                <div className='comCardRoom'>
                    <p>Base:102</p>
                </div>
            </div>
            <div className='comCardStatus'>
                <div className='comStatusTitle'>
                    <p>Status</p>
                </div>
                <div className='comStatusSelect'>
                    <select></select>
                </div>
            </div>
        </div>
    )
}
