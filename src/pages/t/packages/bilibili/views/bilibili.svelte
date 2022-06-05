<script>
	import {GetSetData, PutSetData} from "../apis"
    import {finishKey, unFinishKey, sleep, replayString } from "../../../../../utils"

    let finishUrlArray = GetSetData(finishKey,new Set())
    let unFinishUrlArray = GetSetData(unFinishKey,new Set())

    async function handleLottery(){
        var app=document.querySelectorAll('span.bili-rich-text-module.at')
        var ev=new Event('mouseenter')
        if (document.querySelector('.bili-dyn-avatar')){
            document.querySelector('.bili-dyn-avatar').dispatchEvent(ev)
            await sleep(1000)
            document.querySelector('.bili-user-profile-view__info__button.follow:not(.checked)')?.click()
        }
        await sleep(1000)
        for (let elem of app){
            elem.dispatchEvent(ev)
            await sleep(1000)
            document.querySelector('.bili-user-profile-view__info__button.follow:not(.checked)')?.click()
            await sleep(1000)
        }
        console.log(app.length)
        window.scrollTo(0,1500)
        await sleep(1000)
        document.querySelector('.dynamic-repost-checkbox')?.scrollIntoView({block: "center", behavior: "smooth"})
        await sleep(2000)
        document.querySelector('.bili-dyn-action.like:not(.active)')?.click()
        await sleep(1000)
        document.querySelector('.dynamic-repost-checkbox')?.click()
        await sleep(1000)
        const random = Math.floor(Math.random() * replayString.length);
        document.querySelector('textarea.ipt-txt').value = replayString[random]
        await sleep(1000)
        document.querySelector('.comment-send button.comment-submit')?.click()
        
        unFinishUrlArray.delete(currentUrl)
        finishUrlArray.add(currentUrl)
        PutSetData(finishKey,finishUrlArray)
        PutSetData(unFinishKey,unFinishUrlArray)
        await sleep(5000)
        // handle over
        window.close();
    }

    let currentUrl = window.location.toString()
    if (unFinishUrlArray.has(currentUrl)){
        console.log("to do lottery")
        handleLottery()
    }

    
</script>

<div id='work-panel'>
    <p>
        采集URL:{window.location.toString()}
    </p>

</div>

<style>
#work-panel {
    right: 2px;
    top: 2px;
    /* width: 50%; */
    border: 1px solid;
    /* padding: 15px; */
    margin-top: 50px;
    z-index: 9999;
    position: fixed;
}
</style>
