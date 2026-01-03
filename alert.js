(() => {
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.ecoledirecte.com/";
  iframe.style.width = "300px";
  iframe.style.height = "150px";
  document.body.appendChild(iframe);

  iframe.onload = () => {
    console.log("iframe loaded");

    const doc = iframe.contentDocument;
    console.log("contentDocument accessible:", !!doc);

    console.log("iframe origin:", iframe.contentWindow.location.origin);
    console.log("parent origin:", location.origin);
    console.log("same origin:", iframe.contentWindow.location.origin === location.origin);

    const body = doc.body;
    console.log("iframe body:", body);
    console.log("iframe body innerHTML length:", body.innerHTML.length);

    body.style.background = "red";
    body.innerHTML = "<h1 id='test'>DOM MODIFIED</h1>";

    console.log("DOM modified");

    const script = doc.createElement("script");
    script.textContent = "console.log('SCRIPT EXECUTED'); alert('XSS')";
    body.appendChild(script);

    console.log("script injected");

    const btn = doc.createElement("button");
    btn.textContent = "CLICK ME";
    btn.onclick = () => alert("clicked");
    body.appendChild(btn);

    console.log("onclick handler attached");
  };
})();
