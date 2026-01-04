(() => {
  const start = performance.now()
  console.log("script start")

  function ready(cb) {
    const i = setInterval(() => {
      if (document.body) {
        clearInterval(i)
        cb()
      }
    }, 10)
  }

  ready(() => {
    console.log("body ready at", (performance.now() - start).toFixed(2), "ms")

    const iframe = document.createElement("iframe")
    iframe.src = "/Famille"
    iframe.style.width = "800px"
    iframe.style.height = "600px"

    document.body.appendChild(iframe)

    iframe.onload = () => {
      const iframeLoadTime = performance.now()
      console.log("iframe load event at", (iframeLoadTime - start).toFixed(2), "ms")

      const d = iframe.contentDocument

      const wait = setInterval(() => {
        if (!d || !d.body || d.body.children.length === 0) return

        clearInterval(wait)

        const end = performance.now()
        console.log("iframe DOM ready at", (end - start).toFixed(2), "ms")
        console.log("total iframe load time", (end - start).toFixed(2), "ms")

        const s = d.createElement("script")
        s.textContent = "alert('injection OK')"
        d.body.appendChild(s)
      }, 50)
    }
  })
})()
