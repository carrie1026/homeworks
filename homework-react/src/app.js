/*eslint-disable*/
import React, {useState, useMemo} from 'react';
import { createBrowserHistory } from 'history';
import Header from './containers/header'
import Footer from './containers/footer'
import Menu from './containers/menu'
import Content from './containers/app'
import './base.css'
import './app.styl'

export default () => {
    const [currentRoute, setCurrentRoute] = useState('agent')
    const history = createBrowserHistory({basename: '/'})

    const changeRoute = (value)=>{
        setCurrentRoute(value)
    }

    return (
        <div className="main">
            <Header />
            <div className="wrap">
                <Menu history={history} handleChange={changeRoute} />
                <Content key={currentRoute} />
            </div>
            <Footer />
        </div>
    )
}