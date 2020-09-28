/**
 * Agent - list - list item
 */
import React, { useState, useEffect, useMemo } from 'react'
import $api from '@apis/index'

import AddItem from './addItem'
import Button from '@components/Button'

import img_windows from '@assets/os_icons/windows.png'
import img_centos from '@assets/os_icons/cent_os.png'
import img_debian from '@assets/os_icons/debin.png'
import img_suse from '@assets/os_icons/suse.png'
import img_ubuntu from '@assets/os_icons/ubuntu.png'

export default (props) => {
    const { itemData } = props
    const [showAdd, setShowAdd] = useState(false) // 控制添加tag弹出框显示
    const [tags, setTags] = useState([])
    
    useEffect(()=>{
        setTags(itemData.resources)
    },[])
    
    // 定义系统图片对象，将key对应接口返回数据中的key - os，以获取真实的图片
    const osImgs = {
        windows: img_windows,
        centos: img_centos,
        suse: img_suse,
        ubuntu:img_ubuntu,
        debian: img_debian
    }

    // render tag items
    const tagItems = useMemo(()=>{
        const _tags = tags && tags.slice(0)
        return _tags && _tags.map((item,index)=>{
            return <span key={`${item}_${index}`} className="tagItem">
                {item}
                <i className="icon-trash" onClick={()=>{handleDelTag(index)}}></i>
            </span>
        })
    }, [tags])

    // show add tag pop
    const handleShowAddTag = () => {
        setShowAdd(true)
    }
    // hide add tag pop
    const handleCloseAdd = () => {
        setShowAdd(false)
    }

    // delete tag
    const handleDelTag = (index) => {
        const _tags = tags && tags.slice(0)
        _tags.splice(index, 1)
        setTags(_tags)

        // update data to interface
        updateData(_tags)
    }
    // add tag(s)
    const handleAddTag = (tagValues) => {
        let _tags = tags && tags.slice(0).concat(tagValues)
        setTags(_tags)

        updateData(_tags)
    }
    // click deny button
    const handelClickButton = ()=> {
        console.log('click deny')
    }

    // update data to interface
    const updateData = async (arr) => {
        let _itemData = itemData
        const _tags = arr 
        _itemData.resources = _tags
        $api.updateData(_itemData.id, _itemData)
    }

    
    return (
        <li className="listItem">
            {showAdd && <AddItem handleCloseAdd={handleCloseAdd} handleAddTag={handleAddTag} key={itemData.id} />}
            <img className="osImg" src={osImgs[itemData.os]} />
            <div className="itemInfos">
                <div className="infos_top">
                    <span className="info_name"><i className="icon-desktop"></i>{itemData.name}</span>
                    <span className={`info_${itemData.status}`}>{itemData.status}</span>
                    <span><i className="icon-info"></i>{itemData.ip}</span>
                    <span><i className="icon-folder"></i>{itemData.location}</span>
                </div>
                <div className="infos_tags">
                    <span onClick={handleShowAddTag} className="addBtn"><i className="icon-plus"></i></span>
                    <div className="tagWrap">
                        {tagItems}
                    </div>
                    {itemData.status === 'building' && 
                        <Button icon={'icon-deny'} text={'Deny'} handleClick={handelClickButton} />}
                </div>
            </div>
        </li>
    )
}