// @ts-ignore
import { bilibili } from "./views"
import { waitForElm } from "../../../../utils"

function init() {
    waitForElm(".header-avatar-wrap").then(() => {
        new bilibili({
            target: document.querySelector('.z-top-container')
        })
    })
}

export default {
    init
}