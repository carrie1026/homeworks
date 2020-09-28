import React from 'react'
import './button.styl'

export default (props) => {
    /**
     * button
     * @parma colorType : light, dark
     * @parma icon : iocn class name
     * @parma text : String
     * @parma classname: String
     * @parma handleClick: Function
     */
    const {
        icon = null, 
        text="button", 
        classname='', 
        colorType='light', 
        handleClick 
    } = props

    return (
        <button 
            className={`btn_default btn_${colorType} ${classname}`} 
            onClick={()=>{handleClick()}}
        >
            {icon && <i className={`${icon}`}></i>}
            {text}
        </button>
    )
}