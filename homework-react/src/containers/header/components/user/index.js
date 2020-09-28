/**
 * Header - user info
 */
import React, { useState } from 'react'
import img_ubuntu from '@assets/os_icons/ubuntu.png'

export default () => {
    const [showOptions, setShowOptions] = useState(false)
    const options = [
        {name: 'Profiler', icon: 'icon-id-card'},
        {name: 'Sign Out', icon: 'icon-sign-in'}
    ]
    const opItem = options.map(item=>{
        return <li><i className={`${item.icon}`}></i>{item.name}</li>
    })

    const handleOptions = ()=>{
        setShowOptions(!showOptions)
    }
    return (
        <div className="userInfo">
            <img src={img_ubuntu} />
            <i className={`${showOptions?'icon-angle-up':'icon-angle-down'}`} onClick={handleOptions}></i>
            {showOptions && <ul>{opItem}</ul>}
        </div>
    )
}