(() => {
  const iframe = document.createElement("iframe")
  iframe.src = "/Famille"
  iframe.style.width = "800px"
  iframe.style.height = "600px"

  iframe.onload = () => {
    const w = iframe.contentWindow
    const d = iframe.contentDocument

    console.log("iframe loaded")
    console.log("same origin:", w.location.origin === location.origin)
    console.log("body exists:", !!d.body)

    // test contrôle DOM
    const test = d.createElement("div")
    test.textContent = "DOM contrôlé"
    test.style.position = "fixed"
    test.style.top = "0"
    test.style.left = "0"
    test.style.background = "red"
    test.style.color = "white"
    test.style.zIndex = "999999"

    d.body.appendChild(test)

    console.log("DOM modifié avec succès")
  }

  document.body.appendChild(iframe)
})()
