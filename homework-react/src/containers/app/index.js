/**
 * App
 * 页面组件 - 主内容区域入口
 * 可在src/route.js中配置页面router
 * 设计目的: 切换路由时只刷新内容区域，头部、底部、导航不刷新
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from '../../routes';
import './app.styl'


export default ()=> {
    return (
        <div className="content">
            <Router>
                <Switch>
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            exact
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                    <Route render={() => <div>No thing was found</div>} />
                </Switch>
            </Router>
        </div>
    )
}