import React from 'react'

const ComplaintNotiSection = () => {
    return (
        <div className='paymentNotiSection'>
          <ComplaintNotiCard />
        </div>
    )
}

export default ComplaintNotiSection;

const ComplaintNotiCard = () => {
    return (
        <div className='paymentNotiCard'>
            <div className='paymentDetails'>
                <div className='payType'>
                   <p>Bedroom</p>
                </div>
                <div className='payAmount'>
                   <p>Cleanliness</p>
                </div>
            </div>
            <div className='payeeDetails'>
                <div className='payeeName'>
                   <p>Abhishek Hazra</p>
                </div>
                <div className='payeeRoom'>
                   <p>G-101</p>
                </div>
            </div>
            <div className='paymentMeta'>
                <div className='paymentMetaDate'>
                   <p>Raise On:1/08/2023</p>
                </div>
                <div className='paymentMetaMode'>
                   <p>Status</p>
                </div>
            </div>
        </div>
    )
}