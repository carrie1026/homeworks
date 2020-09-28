/**
 * Menu module
 */
import React, { useState } from 'react'
import './menu.styl'

export default (props) => {
    const [currentPath, setCurrentPath] = useState('agent')

    // u can get menu list from interface too
    const menuList = [
        {name: 'DASHBOARD', path: 'dashboard', icon: 'dashboard'},
        {name: 'AGENT', path: 'agent', icon: 'sitemap'},
        {name: 'MY CRUISE', path: 'cruise', icon: 'boat'},
        {name: 'HELP', path: 'help', icon: 'life-bouy'},
    ]
    // history datas
    const historyList = [
        'bjstdmnbgr02/Acceptance_test',
        'bjstdmnbgr02/Acceptance_test',
        'bjstdmnbgr02/Acceptance_test',
        'bjstdmnbgr02/Acceptance_test',
        'bjstdmnbgr02/Acceptance_test',
        'bjstdmnbgr02/Acceptance_test',
        'bjstdmnbgr02/Acceptance_test',
        'bjstdmnbgr02/Acceptance_tesAcceptance_testt',
        'bjstdmnbgr02/Acceptance_test',
    ]

    // menu items
    const menuItem = menuList.map(item=>{
        return (
            <li key={item.name} className={`${currentPath === item.path?'activeMenu':''}`} onClick={()=>{changeRoute(item.path)}}>
                <i className={`icon-${item.icon}`}></i>
                <span className={`${item.path == 'dashboard'?'dashboard':''}`}>{item.name}</span>
            </li>
        )
    })
    // history list items
    const historyItem = historyList.map((item,index)=>{
        return (
            <li key={`${item}_${index}`} title={item}>{item}</li>
        )
    })
    // change route from menu
    const changeRoute = (path) => {
        setCurrentPath(path)
        props.history.push(path)
        props.handleChange(path)
    }

    return (
        <div className="menu">
            <ul className="menu_list">{menuItem}</ul>
            <div className="menu_history">
                <h5>History</h5>
                <ul className="history_list">{historyItem}</ul>
            </div>
        </div>
    )
}