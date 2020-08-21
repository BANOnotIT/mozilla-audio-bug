const media = new Audio('./test.wav')

// media.playbackRate = 2

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

            btn.disabled = true
        }
    }
})