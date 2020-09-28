/**
 * Agent page
 */
import React, { useState, useEffect } from 'react'
import {withRouter} from "react-router-dom"

import Overview from './components/overview'
import TabFuns from './components/tabFuns'
import List from './components/list'

import $api from '@apis/index.js'
import './agent.styl'

const Agent = () => {
    const _overviewData = {
        building: 0,
        idle: 0,
        all: 0,
        physical: 0,
        virtual: 0
    }
    const [listData, setListData] = useState([])
    const [overviewData, setOverviewData] = useState(_overviewData)
    // 初始agent化页面数据
    useEffect(()=>{
        {getList()}
    },[])

    // 获取接口列表数据
    const getList = async ()=> {
        const _data = await $api.getListData()
        // 计算获取overview中展示的数据
        const building = _data.data && _data.data.filter(item=>{return item.status === 'building'})
        const idle = _data.data && _data.data.filter(item=>{return item.status === 'idle'})
        const physical = _data.data && _data.data.filter(item=>{return item.type === 'physical'})
        const virtual = _data.data && _data.data.filter(item=>{return item.type === 'virtual'})

        const _overviewData= {
            building: building ? building.length : 0,
            idle: idle ? idle.length : 0,
            all: _data.data ? _data.data.length : 0,
            physical: physical ? physical.length : 0,
            virtual: virtual ? virtual.length : 0
        }
        setListData(_data.data) // 更新列表数据
        setOverviewData(_overviewData) // 更新概览数据
    }

    return (
        <div className="agent">
            <Overview overviewData={overviewData} />
            <TabFuns />
            <List listData={listData} />
        </div>
    )
}

export default withRouter(Agent)