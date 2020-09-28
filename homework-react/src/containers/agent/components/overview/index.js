/**
 * Agent - overview
 */
import React from 'react'
import Building from './building'
import Idle from './idle'
import Count from './count'
import './showCount.styl'

export default (props) => {
    const { overviewData } = props
    const building = overviewData.building
    const idle = overviewData.idle
    const count = [
        {num: overviewData.all, type: 'ALL'},
        {num: overviewData.physical, type: 'PHYSICAL'},
        {num: overviewData.virtual, type: 'VIRTUAL'}
    ]

    return (
        <div className="showCounts">
            <Building building={building} />
            <Idle idle={idle} />
            <Count count={count} />
        </div>
    )
}