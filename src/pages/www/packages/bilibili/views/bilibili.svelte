<script>
    
	import {GetSetData,PutSetData} from "../apis"
    import {finishKey, unFinishKey, sleep, replayString } from "../../../../../utils"

    let finishUrlArray = GetSetData(finishKey,new Set());
    let unFinishUrlArray = GetSetData(unFinishKey,new Set());

    const getArtilceUrl = async () => {
        let lotteryUrl = []
        document.querySelectorAll(".article-content a").forEach(element => {
            if (element.href.match("t.bilibili.com/\\d+")) {
                lotteryUrl.push(element.href)
            }
        })
        console.log('unFinishUrlArray',unFinishUrlArray)
        lotteryUrl = lotteryUrl.filter(url => !finishUrlArray.has(url) && !unFinishUrlArray.has(url))
        lotteryUrl.forEach(item => unFinishUrlArray.add(item))
        PutSetData(finishKey,finishUrlArray)
        PutSetData(unFinishKey,unFinishUrlArray)
        unFinishUrlArray = unFinishUrlArray
    }
    const cleanunFinishUrlArray = ()=>{
        unFinishUrlArray = new Set()
        PutSetData(unFinishKey,unFinishUrlArray)
    }

    const handleUrl = async () => {
        for (let url of unFinishUrlArray){
            let newWin = window.open(url ,'bilibili', "status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=0,scrollbars=0,width=900");
            for (let i = 0; i < 100; i++) {
                if (newWin.closed) {
                    unFinishUrlArray = GetSetData(unFinishKey,new Set());
                    break;
                }
                await sleep(1000)
            }
            await sleep(20000)
        }
    }
</script>

<button on:click={getArtilceUrl}>
    采集: {unFinishUrlArray.size}
</button>


<button on:click={handleUrl}>
    处理
</button>


<button on:click={cleanunFinishUrlArray}>
    清理 unFinishKey
</button>


<style>
button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 1em;
    color: white;
    background-color: rgba(255, 62, 0, 0.8);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 100px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
}

button:focus {
    border: 2px solid #ff3e00;
}

button:active {
    background-color: rgba(255, 62, 0, 0.8);
}
</style>
