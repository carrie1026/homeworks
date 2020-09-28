/**
 * Header
 */
import React from 'react'
import Logo from '@components/Logo'
import User from './components/user'
import './header.styl'

export default () => {
    return (
        <div className="header">
            <div className="header_content">
                <Logo />
                <User />
            </div>
        </div>
    )
}