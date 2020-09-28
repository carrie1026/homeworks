/**
 * Agent - overview - type counts
 */
import React from 'react'

export default (props) => {
    const { count } = props
    const countItem = count.map(item=>{
        return (
            <div className="count_wrap" key={item.type}>
                <span className="type_name">{item.type}</span>
                <span className="type_num">{item.num}</span>
            </div>
        )
    })
    return (
        <div className="showCount_box showCount_box_count">
            {countItem}
        </div>
    )
}