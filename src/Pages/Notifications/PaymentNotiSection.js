import React from 'react'

const PaymentNotiSection = () => {
    return (
        <div className='paymentNotiSection'>
          <PaymentNotiCard />
        </div>
    )
}

export default PaymentNotiSection;

const PaymentNotiCard = () => {
    return (
        <div className='paymentNotiCard'>
            <div className='paymentDetails'>
                <div className='payType'>
                   <p>Security Deposit</p>
                </div>
                <div className='payAmount'>
                   <p>Rs 32000</p>
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
                   <p>Paid On:1/08/2023</p>
                </div>
                <div className='paymentMetaMode'>
                   <p>Paid using : Cash</p>
                </div>
            </div>
            <div className='paymentButtons'>
                <div className='paymentButtonHolder'>
                    <button className='accept'>Accept</button>
                </div>
                <div classname="paymentButtonHolder">
                   <button className='decline'>Decline</button> 
                </div>   
            </div>

        </div>
    )
}