/**
 * Agent - list
 */
import React, {useMemo} from 'react'
import ListItem from './listItem'

import './list.styl'

export default (props) => {
    const { listData } = props
    // 渲染list item
    const renderList = useMemo(()=>{
        return listData.length > 0 && listData.map(item=>{
            return (
                <ListItem key={item.id} itemData={item} />
            )
        })
    }, [listData])

    return (
        <ul className="listWrap">
            {renderList}
        </ul>
    )
}