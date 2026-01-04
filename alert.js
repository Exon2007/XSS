(() => {
  const iframe = document.createElement("iframe")
  iframe.src = "/Famille"
  iframe.style.width = "800px"
  iframe.style.height = "600px"

  document.body.appendChild(iframe)

  iframe.onload = () => {
    const d = iframe.contentDocument

    const wait = setInterval(() => {
      if (!d || !d.body) return
      if (d.body.children.length === 0) return

      clearInterval(wait)

      console.log("iframe DOM prêt")
      console.log("body:", d.body)

      const s = d.createElement("script")
      s.textContent = "alert('DOM iframe contrôlé')"
      d.body.appendChild(s)

      console.log("script injecté")
    }, 100)
  }
})()
