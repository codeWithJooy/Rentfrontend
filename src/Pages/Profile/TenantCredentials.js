import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Profile.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { getTenantsCredentials, resetTenantPassword } from '../../actions/tenantAction'

const TenantCredentials = () => {
    const { userId, propertyId } = useSelector(state => state.user)
    const [credData, setCredData] = useState([])
    const [forceUpdate, setForceUpdate] = useState(true)
    useEffect(() => {
        if (!forceUpdate) return
        (async () => {
            let data = await getTenantsCredentials(userId, propertyId)
            setCredData(data)
            setForceUpdate(false)
        })()
    }, [forceUpdate])

    if (!forceUpdate) {
        return (
            <div className='profMain'>
                <Header name={"Credentials"} link={"/settings"} type={"back"} />
                <div className='tenantCredHolders'>
                    {
                        credData.map((tenant, key) => (
                            <CredCards data={tenant} key={key} setForceUpdate={setForceUpdate} />
                        ))
                    }

                </div>
                <Footer />
            </div>
        )
    }
    else {
        return <></>
    }
}

export default TenantCredentials

const CredCards = ({ data, setForceUpdate }) => {
    let { name, room, email, number, password, tenantId } = data
    const { userId, propertyId } = useSelector(state => state.user)
    const [edit, setEdit] = useState(false)
    const [pass, setPass] = useState(password)

    const reset = () => {
        (async () => {
            if (await resetTenantPassword(userId, propertyId, tenantId, "123456")) {
                setForceUpdate(true)
            }
        })()
    }
    const handleChange = (e) => {
        setPass(e.target.value)
    }
    const setPassword = () => {
        (async () => {
            if (await resetTenantPassword(userId, propertyId, tenantId, pass)) {
                setForceUpdate(true)
            }
        })()
    }
    return (
        <div className='credCard'>
            <div className='credNameRoom'>
                <div className='credName'>
                    <p>{name}</p>
                </div>
                <div className='credRoom'>
                    <p>{room}</p>
                </div>
            </div>
            <div className='credEmailNum'>
                <div className='credEmail'>
                    <p>{email}</p>
                </div>
                <div className='credNum'>
                    <p>{number}</p>
                </div>
            </div>
            <div className='credPass'>
                <input value={pass} onChange={handleChange} readOnly={!edit} />
            </div>
            <div className='credButtons'>
                {
                    !edit &&
                    <button className='credEdit' onClick={() => setEdit(true)}>
                        <p>Edit Password</p>
                    </button>
                }
                {
                    edit &&
                    <button className='credEdit' onClick={setPassword}>
                        <p>Set Password</p>
                    </button>
                }
                <button className='credReset' onClick={reset}>
                    <p>Reset Password</p>
                </button>
            </div>
        </div>
    )
}