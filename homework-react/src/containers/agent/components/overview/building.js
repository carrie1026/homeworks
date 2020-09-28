/**
 * Agent - overview - building
 */
import React from 'react'

export default (props) => {
    const { building } = props

    return (
        <div className="showCount_box showCount_box_building">
            <h5>Building</h5>
            <p>{building}</p>
            <i className="icon-cog"></i>
        </div>
    )
}