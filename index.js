// const media = new Audio('./test.wav')

media.addEventListener('canplaythrough', () => {
    if (media.readyState === media.HAVE_ENOUGH_DATA) {
        btn.disabled = false
        btn.onclick = () => {
            const ctx = new AudioContext

            const source = ctx.createMediaElementSource(media)
            source.connect(ctx.destination)

            media.play().then(() => {
                media.playbackRate = 2
            })

            media.controls = true
            btn.disabled = true
        }
    }
})

media1.addEventListener('canplaythrough', () => {
    if (media1.readyState === media.HAVE_ENOUGH_DATA) {
        btn1.disabled = false
        btn1.onclick = () => {
            media1.play().then(() => {
                media1.playbackRate = 2
            })

            media1.controls = true
            btn1.disabled = true
        }
    }
})

