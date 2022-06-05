// export api here. recommend to use **custom** GM_xmlhttpRequest instead of fetch or native GM_xmlhttpRequest

const GetSetData = (key, defaultValue) => {
    // @ts-ignore
    let data = GM_getValue(key, null)
    console.log("key",key,data)
    if (data) {
        const retSet = new Set()
        // JSON.parse(data).forEach(item => retSet.add(item))
        data.forEach(item => retSet.add(item))
        return retSet
    }
    return defaultValue
}

const PutSetData = (key, value) => {
    // @ts-ignore
    GM_setValue(key, Array.from(value))
}

export {
    GetSetData,PutSetData
}
