/**
 * Agent - list - additem popup
 */
import React, {useState,useEffect,useRef} from 'react'
import Button from '@components/Button'
import { formatChart } from '@utils/util.js'
import './addItem.styl'

export default (props) => {
    const [inputVal, setInputVal] = useState('')

    // 监听处理add弹出层是否需要隐藏
    let addRef = useRef(null)
    const listenAddFn = (e) => {
        if (addRef && e.target !== addRef && !addRef.current.contains(e.target)) {
            props.handleCloseAdd()
        }
    }
    // 监听和移除监听
    useEffect(()=>{
        window.addEventListener('click', listenAddFn, false);
        return () => {
            window.removeEventListener('click', listenAddFn, false);
        }
    },[])
    // 监听处理输入框中输入数据
    const handleChangeInput = (e) => {
        const _value = e.target.value
        setInputVal(_value)
    }
    // 添加tag
    const handleAdd = ()=>{
        let tags = []
        let _inputVal = formatChart(inputVal)
        tags = _inputVal.trim().split(',')
        // 过虑多余分隔导致的空tag
        tags = tags && tags.filter(item=>{
            return item.length > 0
        })
        props.handleAddTag(tags)
        setInputVal('')
    }


    return (
        <div className="addItem" ref={addRef}>
            <i className="close_btn icon-close" onClick={props.handleCloseAdd}></i>
            <p>Separate multiple resource name with commas</p>
            <input type="text" value={inputVal} onChange={handleChangeInput} placeholder='e.g. Chrome, Firefox' />
            <div className="buttons">
                <Button text={'Add Resources'} colorType={'light'} handleClick={handleAdd} />
                <Button text={'Cancel'} colorType={'dark'} handleClick={props.handleCloseAdd} />
            </div>
        </div>
    )
}