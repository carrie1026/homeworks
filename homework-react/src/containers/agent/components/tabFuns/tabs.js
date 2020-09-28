/**
 * Agent - tab fuction
 */
import React, {useState} from 'react'

export default () => {
    const [currentTab, setCurrentTab] = useState('All')
    const tabs = ['All', 'Physical', 'Virtual']

    const tabItem = tabs.map(item=>{
        return (
            <span key={item} className={`${item===currentTab?'activeTab':''}`}>{item}</span>
        )
    })
    return (
        <div className="tabs_wrap">
            {tabItem}
        </div>
    )
}