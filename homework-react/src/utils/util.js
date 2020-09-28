// 将中文符号转成英文符号
export function formatChart(chineseChart) {
    let str = ''
    // 转换单引号
    str = chineseChart.replace(/\’|\‘/g,"'").replace(/\“|\”/g,"\"")
    // 转换中括号，大括号
    str = str.replace(/\【/g,"[").replace(/\】/g,"]").replace(/\｛/g,"{").replace(/\｝/g,"}")
    // 转换逗号，冒号
    str = str.replace(/，/g,",").replace(/：/g,":")

    return str
}


