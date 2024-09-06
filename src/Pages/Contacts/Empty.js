import React from 'react'

const Empty=({text})=>{
    return(
        <div className="empty">
        <div className="emptyImg">
          <img src="Assets/Contacts/contacts.png" />
        </div>
        <div className="emptyText">
          <p>{text}</p>
        </div>
      </div>
    )
}

export default Empty;