/**
 * Agent - list sort function
 */
import React, {useState} from 'react'

export default () => {
    const [currentSortType, setCurrentSortType] = useState('list')
    return (
        <div className="sort_wrap">
            <i key={'card'} className={`icon-th-card ${currentSortType=='card'?'activeSort':''}`}></i>
            <i key={'list'} className={`icon-th-list ${currentSortType=='list'?'activeSort':''}`}></i>
        </div>
    )
}