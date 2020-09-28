/**
 * Agent - tab fuction
 * Agent - search 
 * Agent - list sort function
 */
import React from 'react'
import Tabs from './tabs'
import Search from './search'
import Sort from './sort'

import './tabFuns.styl'

export default () => {
    return (
        <div className="tabFuncs">
            <div className="tabs_search">
                <Tabs />
                <Search />
            </div>
            <Sort />
        </div>
    )
}