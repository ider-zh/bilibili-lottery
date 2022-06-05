// @ts-ignore
import { bilibili } from "./views"

function init() {
    new bilibili({
        // target: document.getElementById('article-content')
        target: document.querySelector('.article-up-info')
    })
}

export default {
    init
}