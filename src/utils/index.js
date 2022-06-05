// 公共
export function getStrMiddle(str, before, after) {
	// 取中间文本
	let m = str.match(new RegExp(before + '(.*?)' + after));
	return m ? m[1] : false;
}

export const waitForElm = function (selector) {
	// wait for selector to be available
	return new Promise(resolve => {
		if (document.querySelector(selector)) {
			return resolve(document.querySelector(selector));
		}

		const observer = new MutationObserver(mutations => {
			if (document.querySelector(selector)) {
				resolve(document.querySelector(selector));
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}


export const sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export const replayString = [
    '好运连连','冲鸭',"i了i了。","好活~","棒棒的.","点赞呀","爱了爱了","nice","perfect","great","鼓掌",'perfect','万一呢','三连支持啦,加油鸭','期待','真不错','涨姿势了',
    '好棒好棒','666','22333','来了[脱单doge]','许愿许愿','大气','哇哦！','好耶！','好运','冲冲冲',
]


export const finishKey = "finishKey_v2";
export const unFinishKey = "unfinishKey_v2";