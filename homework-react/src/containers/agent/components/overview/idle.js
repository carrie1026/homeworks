/**
 * Agent - overview - idle
 */
import React from 'react'

export default (props) => {
    const { idle } = props
    return (
        <div className="showCount_box showCount_box_idle">
            <h5>Idle</h5>
            <p>{idle}</p>
            <i className="icon-coffee"></i>
        </div>
    )
}