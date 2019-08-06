const RevealFullscreen = {
	init: () => {
		const { width, height, margin } = Reveal.getConfig()

		const isFullScreen = () => Reveal.getCurrentSlide().hasAttribute("data-fullscreen")
		const goFullScreen = () => Reveal.configure({ width: '100%', height: '100%', margin: 0 })
		const reset = () => Reveal.configure({ width, height, margin })

		if (isFullScreen()) {
			goFullScreen()
		}

		Reveal.addEventListener('slidechanged', () => isFullScreen() ? goFullScreen() : reset())
	}
}

Reveal.registerPlugin('RevealFullscreen', RevealFullscreen)
