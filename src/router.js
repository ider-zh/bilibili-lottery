import pages from "./pages"

function initRouter() {
    // 根据需求判断location对象的值，来选择使用哪个page
    if (location.href.indexOf("www.bilibili") !== -1) {
        pages.www.init();
    }else if (location.href.indexOf("t.bilibili") !== -1) {
        pages.t.init();
    }
}

export {
    initRouter
}