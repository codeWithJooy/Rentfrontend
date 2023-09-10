import React from 'react'
import "./Member.css"

const MemberAcces = () => {
    return (
        <div className='memContainer'>
            <div className='accessMain' style={{paddingTop:"20px"}}>
                <div className='accessText'>
                    <p>Allow App Acess</p>
                </div>
                <div className='accessRadio'>
                    <div className='radioUnit'>
                        <input type="radio"  name="all" value={"yes"} />
                        <label for="adult">Yes</label>
                    </div>
                    <div className='radioUnit'>
                        <input type="radio"  name="all" value="No" />
                        <label for="adult">No</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberAcces;