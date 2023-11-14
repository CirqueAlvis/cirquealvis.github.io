const loadVideo = (iframe) => {
    const cid = 'UCIT_0-bWoXcnV9-_qqmUAVg'
    const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`
    
    fetch(reqURL)
    .then(response => response.json())
    .then(result => { 
        console.log(result)
        const videoNumber = iframe.getAttribute('vnum')
        const link = result.items[videoNumber].link
        const id = link.substring(link.indexOf('=') + 1)
        iframe.setAttribute('src', `https://youtube.com/embed/${id}?controls=0&autoplay=1&disablekb=1&&mute=1`)
    })
    .catch(error => console.log('error', error))
}

const iframe = document.getElementsByClassName('latest-videoembed')
for(let i=0, len = iframe.length; i<len; i++){
    loadVideo(iframe[i])
}